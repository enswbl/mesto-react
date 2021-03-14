import React from "react";


function Card({title, image, like, onSelectedCard, onRemoveCard }) {

    function handleImageClick() {
        onSelectedCard({title, image});

    }

    return ((

        <div className="card">
            <button type="submit" className="card__remove-button" onClick={onRemoveCard} />
            <img
                className="card__image"
                src={image} alt={title}
                onClick={handleImageClick}
            />
            <div className="card__panel">
                <h2 className="card__title">
                    {title}
                </h2>
                <div className="card__like-container">
                    <button type="submit" className="card__like-button"/>
                    <label className="card__like-number">
                        {like.length}
                    </label>
                </div>
            </div>
        </div>

    ));
}

export default Card;
