import React from 'react';
import './Main.css';
import api from '../../utils/api';

function Main(props) {

    const [userAvatar, setUserAvatarState] = React.useState({ avatar: '' });
    const [userName, setUserNameState] = React.useState({name: 'Жак-Ив Кусто'});
    const [userDescription, setUserDescriptionState] = React.useState({description: 'Путешественник'});
    const [cards, setCardsState] = React.useState({items: []});


React.useEffect(() => {
        api.getProfile()
            .then((result) => {
                setUserAvatarState({avatar: result.avatar})
                setUserNameState({name: result.name})
                setUserDescriptionState({description: result.about})
            })
      }, []);

  /*     React.useEffect(() => {
        api.getInitialCards()
            .then((result) => {
                setCardsState({items: result})

                [...result, newElement]
               console.log('result', result);
               console.log('cards.items.name', cards.items.name);
            })
      }, []);
 */



    return (
        <main className='content'>

            <section className='profile'>
            <img /* src=''  alt='' */ className='profile__avatar' style={{ backgroundImage: `url(${userAvatar.avatar})` }}/>
                <button className='profile__edit-avatar-button' onClick={props.onEditAvatar}/>
                <div className='profile__info'>
                    <div className='profile__name-container'>
                        <h1 className='profile__name'>{userName.name}</h1>
                        <button type='button' className='profile__edit-profile-button'
                                onClick={props.onEditProfile}/>
                    </div>
                    <p className='profile__description'>{userDescription.description}</p>
                </div>
                <button type='button' className='profile__create-new-place-button' onClick={props.onAddPlace}/>
            </section>

            <section className='container'>

                <template id='template-card'>
                    <div className='card'>
                        <button type='submit' className='card__remove-button'/>
                        <img className='card__image' src='#' alt='#' />
                            <div className='card__panel'>
                                <h2 className='card__title'>{cards.items.name}</h2>
                                <div className='card__like-container'>
                                    <button type='submit' className='card__like-button'/>
                                    <label className='card__like-number'/>
                                </div>
                            </div>
                    </div>
                </template>
            </section>

        </main>
    );
}

export default Main;