import React from 'react';


function ImagePopup({card, isOpen, onClose}) {

    return ((
        <div className={`popup popup-photo ${isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__photo-container'>
                <button type='reset' className='popup__close-button popup__close-button_photo' onClick={onClose}/>
                <img className='popup__image' src={isOpen ? card.image : ''}
                     alt={isOpen ? card.title : ''}/>

                <p className='popup__photo-title'>{isOpen ? card.title : ''}</p>
            </div>
        </div>
    ));
}

export default ImagePopup;