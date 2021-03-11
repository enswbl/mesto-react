import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';


function App() {

    const [editAvatarState, setEditAvatarState] = React.useState({isOpen: false});
    const [editProfileState, setEditProfileState] = React.useState({isOpen: false});
    const [createPlaceState, setCreatePlaceState] = React.useState({isOpen: false});


    const handleEditAvatarClick = () => {
        setEditAvatarState({isOpen: true});
    }

    const handleEditProfileClick = () =>  {
        setEditProfileState({isOpen: true});
    }

    const handleAddPlaceClick = () => {
        setCreatePlaceState({isOpen: true});
    }

    const closeAllPopups = () => {
        setEditAvatarState({isOpen: false});
        setEditProfileState({isOpen: false});
        setCreatePlaceState({isOpen: false});
    }

  return ((
        <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <PopupWithForm title={'Обновить аватар'} name={'edit-avatar'} isOpen={editAvatarState.isOpen} onClose={closeAllPopups}>

            <input type='url' placeholder='Ссылка на аватар' name='avatarLinkInput' id='avatar-link-input'
                   className='popup__input popup__input_new-place popup__input_place-link'
                   autoComplete='off' required/>
            <span className='popup__input-error-message avatar-link-input-error-message'/>

        </PopupWithForm>

        <PopupWithForm title={'Редактировать профиль'} name={'edit-profile'} isOpen={editProfileState.isOpen} onClose={closeAllPopups}>

        <input type='text' name='profileNameInput' id='profile-name-input'
               className='popup__input popup__input_profile-name' minLength='2' maxLength='40'
               autoComplete='off' required/>
        <span className='popup__input-error-message profile-name-input-error-message'/>

        <input type='text' name='profileDescriptionInput' id='profile-description-input'
               className='popup__input popup__input_profile-description' minLength='2'
               maxLength='200' autoComplete='off'
               required/>
        <span
            className='popup__input-error-message profile-description-input-error-message'/>

        </PopupWithForm>

        <PopupWithForm title={'Новое место'} name={'new-place'} isOpen={createPlaceState.isOpen} onClose={closeAllPopups}>
            <input type='text' placeholder='Название' name='placeNameInput' id='place-name-input'
                   className='popup__input popup__input_new-place popup__input_place-name' minLength='2'
                   maxLength='30'
                   autoComplete='off' required/>
            <span className='popup__input-error-message place-name-input-error-message'/>

            <input type='url' placeholder='Ссылка на картинку' name='placeLinkInput'
                   id='place-link-input'
                   className='popup__input popup__input_new-place popup__input_place-link'
                   autoComplete='off' required/>
            <span className='popup__input-error-message place-link-input-error-message'/>

            </PopupWithForm>
{/*         <PopupWithForm title={'Вы уверены?'} name={'remove-card'} isOpen={createPlaceState.isOpen} onClose={closeAllPopups} />
<button type='submit' className='popup__save-button popup__create-button'>Да</button>

*/}
        <ImagePopup />
        <Footer />
        </div>
      )
  );
}

export default App;
