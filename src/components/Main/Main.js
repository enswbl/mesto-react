import React from 'react';
import Card from "../Card/Card";
import api from '../../utils/api';
import {CurrentUserContext, CurrentCardContext} from '../../contexts/CurrentContext'

function Main({onEditAvatar, onEditProfile, onAddPlace, onRemoveCard, onSelectedCard}) {

    const currentUser = React.useContext(CurrentUserContext);
    const currentCard = React.useContext(CurrentCardContext);

    return ((
        <>
            <section className='profile'>
                <img src={currentUser.avatar} alt='Аватар' className='profile__avatar'/>
                <button className='profile__edit-avatar-button' onClick={onEditAvatar}/>
                <div className='profile__info'>
                    <div className='profile__name-container'>
                        <h1 className='profile__name'>{currentUser.name}</h1>
                        <button type='button' className='profile__edit-profile-button'
                                onClick={onEditProfile}/>
                    </div>
                    <p className='profile__description'>{currentUser.description}</p>
                </div>
                <button type='button' className='profile__add-place-button' onClick={onAddPlace}/>
            </section>

            <section className='container'>
                {currentCard.map((item) => (
                    <Card
                        key={item.id}

                        {...item}
                        onSelectedCard={onSelectedCard}
                        onRemoveCard={onRemoveCard}
                    />
                ))}
            </section>
        </>
    ));
}

export default Main;