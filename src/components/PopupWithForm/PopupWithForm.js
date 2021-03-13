import React from "react";


function PopupWithForm(props) {
    return ((

        <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <button type='reset' className='popup__close-button' onClick={props.onClose}/>

            <form action='#' method='GET' name={props.name}
                  className='popup__container' noValidate>
                <h3 className='popup__title'>{props.title}</h3>
                {props.children}
                <button type='submit' className='popup__save-button'>{props.buttonText}</button>
            </form>

        </div>

    ));
}

export default PopupWithForm;