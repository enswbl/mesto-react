import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import Footer from '../Footer/Footer';
import api from '../../utils/api';

import {CurrentUserContext, CurrentCardContext} from '../../contexts/CurrentContext'
import avatar from "../../images/avatar.jpg";


function App() {
    const [editAvatarState, setEditAvatarState] = React.useState({
        isOpen: false,
    });
    const [editProfileState, setEditProfileState] = React.useState({
        isOpen: false,
    });
    const [addPlaceState, setAddPlaceState] = React.useState({
        isOpen: false,
    });

    const [removeCardState, setRemoveCardState] = React.useState({isOpen: false});

    const [selectedCard, setSelectedCardState] = React.useState({isOpen: false});

    const [selectedImage, setSelectedImageState] = React.useState({title: '', image: ''});


    const [currentUser, setCurrentUserState] = React.useState({
        avatar: avatar,
        name: 'Жак-Ив Кусто',
        description: 'Исследователь океана',
        id: '',
    });


    React.useEffect(() => {
        api.getUserInfo()
            .then((result) => {
                console.log('result', result);
                setCurrentUserState({avatar: result.avatar, name: result.name, description: result.about, id: result._id})
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, [])


    const [currentCard, setCurrentCardState] = React.useState([]);


    React.useEffect(() => {
        api.getInitialCards()
            .then((response) => {
                const initCards = response.map((item) => {
                    return {
                        title: item.name,
                        image: item.link,
                        like: item['likes'],
                        id: item._id,
                    };
                });
                setCurrentCardState(initCards);
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, []);


    const handleEditAvatarClick = () => {
        setEditAvatarState({isOpen: true});
    };

    const handleEditProfileClick = () => {
        setEditProfileState({isOpen: true});
    };

    const handleAddPlaceClick = () => {
        setAddPlaceState({isOpen: true});
    };

    const handleRemoveCardClick = () => {
        setRemoveCardState({isOpen: true});
    };

    const handleSelectedCardClick = (item) => {
        setSelectedCardState({isOpen: true});
        setSelectedImageState({title: item.title, image: item.image});
    };

    const closeAllPopups = () => {
        setEditAvatarState({isOpen: false});
        setEditProfileState({isOpen: false});
        setAddPlaceState({isOpen: false});
        setRemoveCardState({isOpen: false});
        setSelectedCardState({isOpen: false});
    };

    return ((
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <CurrentCardContext.Provider value={currentCard}>
                <Header/>

                <main className='content'>
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onRemoveCard={handleRemoveCardClick}
                        onSelectedCard={handleSelectedCardClick}
                    />

                    <section className='popups'>

                        <PopupWithForm
                            title={'Обновить аватар'}
                            name={'edit-avatar'}
                            isOpen={editAvatarState.isOpen}
                            onClose={closeAllPopups}
                            buttonText={'Сохранить'}
                        >
                            <input
                                type='url'
                                placeholder='Ссылка на аватар'
                                name='avatarLinkInput'
                                id='avatar-link-input'
                                className='popup__input popup__input_add-place popup__input_avatar-link'
                                autoComplete='off'
                                required
                            />
                            <span className='popup__input-error-message avatar-link-input-error-message'/>
                        </PopupWithForm>

                        <PopupWithForm
                            title={'Редактировать профиль'}
                            name={'edit-profile'}
                            isOpen={editProfileState.isOpen}
                            onClose={closeAllPopups}
                            buttonText={'Сохранить'}
                        >
                            <input
                                type='text'
                                name='profileNameInput'
                                id='profile-name-input'
                                className='popup__input popup__input_profile-name'
                                minLength='2'
                                maxLength='40'
                                autoComplete='off'
                                required
                            />
                            <span className='popup__input-error-message profile-name-input-error-message'/>

                            <input
                                type='text'
                                name='profileDescriptionInput'
                                id='profile-description-input'
                                className='popup__input popup__input_profile-description'
                                minLength='2'
                                maxLength='200'
                                autoComplete='off'
                                required
                            />
                            <span className='popup__input-error-message profile-description-input-error-message'/>
                        </PopupWithForm>

                        <PopupWithForm
                            title={'Новое место'}
                            name={'add-place'}
                            isOpen={addPlaceState.isOpen}
                            onClose={closeAllPopups}
                            buttonText={'Добавить'}
                        >
                            <input
                                type='text'
                                placeholder='Название'
                                name='placeNameInput'
                                id='place-name-input'
                                className='popup__input popup__input_add-place popup__input_place-name'
                                minLength='2'
                                maxLength='30'
                                autoComplete='off'
                                required
                            />
                            <span className='popup__input-error-message place-name-input-error-message'/>

                            <input
                                type='url'
                                placeholder='Ссылка на картинку'
                                name='placeLinkInput'
                                id='place-link-input'
                                className='popup__input popup__input_add-place popup__input_place-link'
                                autoComplete='off'
                                required
                            />
                            <span className='popup__input-error-message place-link-input-error-message'/>
                        </PopupWithForm>

                        <PopupWithForm
                            title={'Вы уверены?'}
                            name={'remove-card'}
                            isOpen={removeCardState.isOpen}
                            onClose={closeAllPopups}
                            buttonText={'Да'}
                        />

                        <ImagePopup card={selectedImage} isOpen={selectedCard.isOpen} onClose={closeAllPopups}/>

                    </section>
                </main>
                <Footer/>
                    </CurrentCardContext.Provider>
            </CurrentUserContext.Provider>
        </>
    ))
}

export default App;
