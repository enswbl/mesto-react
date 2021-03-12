import React from 'react';
import api from '../../utils/api';

function Main(props) {

    const [userAvatar, setUserAvatarState] = React.useState({ avatar: '' });
    const [userName, setUserNameState] = React.useState({name: 'Жак-Ив Кусто'});
    const [userDescription, setUserDescriptionState] = React.useState({description: 'Путешественник'});


React.useEffect(() => {
        api.getProfile()
            .then((result) => {
                setUserAvatarState({avatar: result.avatar})
                setUserNameState({name: result.name})
                setUserDescriptionState({description: result.about})
            })
      }, []);

    return (
            <section className='profile'>
            <img src={userAvatar.avatar}  alt='Аватар' className='profile__avatar' /* style={{ backgroundImage: `url(${userAvatar.avatar})` }} *//>
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
    );
}

export default Main;