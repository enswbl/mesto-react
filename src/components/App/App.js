import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import Footer from '../Footer/Footer';


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

    const [selectedCard, setSelectedCard] = React.useState({isOpen: false});

    const [selectedImage, setSelectedImage] = React.useState({title: '', image: ''});

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
        setSelectedCard({isOpen: true});
        setSelectedImage({title: item.title, image: item.image});
    };

    const closeAllPopups = () => {
        setEditAvatarState({isOpen: false});
        setEditProfileState({isOpen: false});
        setAddPlaceState({isOpen: false});
        setRemoveCardState({isOpen: false});
        setSelectedCard({isOpen: false});
    };

    return ((
        <>
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
        </>
    ))
}

export default App;
