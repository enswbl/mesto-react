


function ImagePopup() {

   return (
    <div className='popup popup-photo'>
        <div className='popup__photo-container'>
            <button type='reset' className='popup__close-button popup__close-button_photo'/>
            <img className='popup__image' src='#' alt='#'/>
            <p className='popup__photo-title'/>
        </div>
    </div>
   )
}

export default ImagePopup;