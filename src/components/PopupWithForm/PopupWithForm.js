



function PopupWithForm(props) {
    return (

        <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <button type='reset' className='popup__close-button' onClick={props.onClose} />

            <form action='#' method='GET' name='popupContainer'
                  className='popup__container popup__container_avatar' noValidate>
                <h3 className='popup__title popup__title_new-place'>{props.title}</h3>
                {props.children}
                <button type='submit' className='popup__save-button popup__create-button'>Сохранить</button>
            </form>

        </div>

    )
}

export default PopupWithForm;