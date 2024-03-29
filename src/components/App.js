import React from 'react';
import Header from './Header';
import Main from './Main';
/*import PopupWithForm from '../PopupWithForm/PopupWithForm';*/
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import Footer from './Footer';
import api from '../utils/api';

import {CurrentUserContext} from '../contexts/CurrentUserContext'
import avatar from "../images/avatar.jpg";


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

    const [selectedCard, setSelectedCardState] = React.useState({isOpen: false});

    const [selectedImage, setSelectedImageState] = React.useState({title: '', image: ''});

    const [removeCardState, setRemoveCardState] = React.useState({isOpen: false});

    const [removeIdCard, setRemoveIdCardState] = React.useState();

    const [currentUser, setCurrentUserState] = React.useState({
        avatar: avatar,
        name: 'Жак-Ив Кусто',
        about: 'Исследователь океана',
        _id: '',
    });

    const [currentCards, setCurrentCardsState] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((result) => {
                setCurrentUserState(result)
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, [])


    React.useEffect(() => {
        api.getInitialCards()
            .then((response) => {
                setCurrentCardsState(response)
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, []);


    const handleUpdateAvatar = ({avatar}) => {
        api.setUserAvatar({avatar})
            .then((res) => {
                setCurrentUserState(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }

    const handleUpdateUser = ({name, description}) => {
        api.setUserInfo({name, description})
            .then((res) => {
                setCurrentUserState(res)
                closeAllPopups();
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }

    const handleAddPlaceSubmit = ({title, image}) => {
        api.sendCard({title, image})
            .then((res) => {
                setCurrentCardsState(([res, ...currentCards]))
                closeAllPopups();
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }

    const handleLikeCardClick = ({like, id}) => {
        const isLiked = like.some(i => i._id === currentUser._id);

        !isLiked ?
            api.setLike(id, !isLiked)
                .then((result) => {
                    setCurrentCardsState((state) => state.map((c) => c._id === id ? result : c));
                })
                .catch((err) => {
                    console.log("Something is Wrong:", err);
                })
            :
            api.removeLike(id, isLiked)
                .then((result) => {
                    setCurrentCardsState((state) => state.map((c) => c._id === id ? result : c));
                })
                .catch((err) => {
                    console.log("Something is Wrong:", err);
                });
    }

    const handleDeleteCardClick = (cardId) => {
        api.removeCard(cardId)
            .then(() => {
                setCurrentCardsState(currentCards.filter(item => item._id !== cardId))
                closeAllPopups();
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }

    const handleEditAvatarClick = () => {
        setEditAvatarState({isOpen: true});
    };

    const handleEditProfileClick = () => {
        setEditProfileState({isOpen: true});
    };

    const handleAddPlaceClick = () => {
        setAddPlaceState({isOpen: true});
    };

    const handleSelectedCardClick = (item) => {
        setSelectedCardState({isOpen: true});
        setSelectedImageState({title: item.title, image: item.image});
    };

    const handleRemoveCardClick = (cardId) => {
        setRemoveCardState({isOpen: true});
        setRemoveIdCardState(cardId);
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
                <Header/>

                <main className='content'>
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        currentCards={currentCards}
                        onSelectedCard={handleSelectedCardClick}
                        onLikeCard={handleLikeCardClick}
                        onRemoveCard={handleRemoveCardClick}
                    />

                    <section className='popups'>

                        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={editAvatarState.isOpen}
                                         onClose={closeAllPopups}/>

                        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={editProfileState.isOpen}
                                          onClose={closeAllPopups}/>

                        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={addPlaceState.isOpen}
                                       onClose={closeAllPopups}/>

                        <ConfirmDeletePopup removeIdCard={removeIdCard} onDeleteCard={handleDeleteCardClick}
                                            isOpen={removeCardState.isOpen}
                                            onClose={closeAllPopups}/>

                        <ImagePopup selectedImage={selectedImage} isOpen={selectedCard.isOpen}
                                    onClose={closeAllPopups}/>

                    </section>
                </main>
                <Footer/>
            </CurrentUserContext.Provider>
        </>
    ))
}

export default App;
