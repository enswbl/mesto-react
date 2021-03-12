import React from "react";

function Card(props) {

    //console.log('props', props);
    return (

        <div className="card">
            <button type="submit" className="card__remove-button"/>
            <img
                className="card__image"
                src={props.src} alt={props.title}  /* style={{
              backgroundImage: `url(${card.link})`,
            }} */
                onClick={props.onCardClick}
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

    );
}

export default Card;
