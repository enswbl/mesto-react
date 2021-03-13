import React from 'react';


function ImagePopup(props) {

    return ((
        <div className={`popup popup-photo ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__photo-container'>
                <button type='reset' className='popup__close-button popup__close-button_photo' onClick={props.onClose}/>
                <img className='popup__image' src={props.isOpen ? props.card.image : ''}
                     alt={props.isOpen ? props.card.title : ''}/>

                <p className='popup__photo-title'>{props.isOpen ? props.card.title : ''}</p>
            </div>
        </div>
    ));
}

export default ImagePopup;