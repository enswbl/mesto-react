import React from 'react';
import Card from "../Card/Card";
import api from '../../utils/api';
import avatar from '../../images/avatar.jpg';


function Main(props) {

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
                        id: item._id,
                        src: item.link,
                        like: item['likes'],
                        title: item.name,
                    };
                });
                setCardsState(initCards);
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
    }, []);


    /*                onCardClick={handleCardClick}
                onClose={closeAllPopups}*/
    /*                {props.onSelectedCard}
                {props.onClose} */

    return ((
        <>
            <section className='profile'>
                <img src={userAvatar.avatar} alt='Аватар' className='profile__avatar'/>
                <button className='profile__edit-avatar-button' onClick={props.onEditAvatar}/>
                <div className='profile__info'>
                    <div className='profile__name-container'>
                        <h1 className='profile__name'>{userName.name}</h1>
                        <button type='button' className='profile__edit-profile-button'
                                onClick={props.onEditProfile}/>
                    </div>
                    <p className='profile__description'>{userDescription.description}</p>
                </div>
                <button type='button' className='profile__add-place-button' onClick={props.onAddPlace}/>
            </section>

            <section className='container'>
                {cards.map((item) => (
                    <Card
                        {...item}
                        key={item.id}
                        onSelectedCard={props.onSelectedCard}
                        onRemoveCard={props.onRemoveCard}
                    />
                ))}
            </section>
        </>
    ));
}

export default Main;