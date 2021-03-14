import React from 'react';
import Card from "../Card/Card";
import api from '../../utils/api';
import avatar from '../../images/avatar.jpg';


function Main({onEditAvatar, onEditProfile, onAddPlace, onRemoveCard, onSelectedCard}) {

    const [userAvatar, setUserAvatarState] = React.useState({avatar: avatar});
    const [userName, setUserNameState] = React.useState({name: 'Жак-Ив Кусто'});
    const [userDescription, setUserDescriptionState] = React.useState({description: 'Исследователь океана'});

    const [cards, setCardsState] = React.useState([]);

    React.useEffect(() => {
        api.getProfile()
            .then((result) => {
                setUserAvatarState({avatar: result.avatar})
                setUserNameState({name: result.name})
                setUserDescriptionState({description: result.about})
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, []);


    React.useEffect(() => {
        api.getInitialCards()
            .then((response) => {
                const initCards = response.map((item) => {
                    return {
                        title: item.name,
                        image: item.link,
                        like: item['likes'],
                        id: item._id,
                    };
                });
                setCardsState(initCards);
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, []);


    return ((
        <>
            <section className='profile'>
                <img src={userAvatar.avatar} alt='Аватар' className='profile__avatar'/>
                <button className='profile__edit-avatar-button' onClick={onEditAvatar}/>
                <div className='profile__info'>
                    <div className='profile__name-container'>
                        <h1 className='profile__name'>{userName.name}</h1>
                        <button type='button' className='profile__edit-profile-button'
                                onClick={onEditProfile}/>
                    </div>
                    <p className='profile__description'>{userDescription.description}</p>
                </div>
                <button type='button' className='profile__add-place-button' onClick={onAddPlace}/>
            </section>

            <section className='container'>
                {cards.map((item) => (
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