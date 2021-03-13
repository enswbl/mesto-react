import React from "react";


function Card(props) {

    function handleImageClick() {
        props.onSelectedCard(props);

    }

    return ((

        <div className="card">
            <button type="submit" className="card__remove-button" onClick={props.onRemoveCard} />
            <img
                className="card__image"
                src={props.src} alt={props.title}
                onClick={handleImageClick}
            />
            <div className="card__panel">
                <h2 className="card__title">
                    {props.title}
                </h2>
                <div className="card__like-container">
                    <button type="submit" className="card__like-button"/>
                    <label className="card__like-number">
                        {props.like.length}
                    </label>
                </div>
            </div>
        </div>

    ));
}

export default Card;
