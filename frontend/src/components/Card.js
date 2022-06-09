import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ onCardClick, card, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `elem__del-button ${isOwn ? 'elem__del-button_visible' : 'elem__del-button_hidden'}`
  );

  const cardLikeButtonClassName = (
    `elem__like-button ${isLiked ? 'elem__like-button_active' : ''}`
  );

  return (
    <div className="elem">
      <img className="elem__image" src={card.link} alt={card.name} title="Изображение локации указанной в описаннии к фотографии"
        onClick={() => onCardClick(card)} />
      <button type="button" className={cardDeleteButtonClassName} title="Удалить" onClick={() => onCardDelete(card)} />
      <div className="elem__info">
        <h2 className="elem__text">{card.name}</h2>
        <div className="elem__like-container">
          <button className={cardLikeButtonClassName} type="button" title="Нравится" onClick={() => onCardLike(card)} />
          <p className="elem__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;

