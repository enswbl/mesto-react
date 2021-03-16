import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {CurrentUserContext} from '../../contexts/CurrentContext'


function EditProfilePopup({onUpdateUser, isOpen, onClose}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setNameState] = React.useState({});

    const [description, setDescriptionState] = React.useState({});

    function handleNameChange(e) {
        setNameState(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescriptionState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name: name,
            description: description,
        });
    }

    React.useEffect(() => {
        setNameState(currentUser.name);
        setDescriptionState(currentUser.description);
    }, [currentUser]);


    return ((
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'edit-profile'}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
            buttonText={'Сохранить'}
        >
            <input
                value={name}
                onChange={handleNameChange}
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
                value={description}
                onChange={handleDescriptionChange}
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
    ))
}

export default EditProfilePopup;