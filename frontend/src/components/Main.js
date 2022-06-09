import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
        <button className="profile__edit-pen" type="button" onClick={onEditAvatar} />
        <h1 className="profile__name">{currentUser.name}</h1>
        <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={onEditProfile} />
        <p className="profile__job">{currentUser.about}</p>
        <button className="profile__add-button" type="button" onClick={onAddPlace} />
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;
