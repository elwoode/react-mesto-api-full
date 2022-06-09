import React from 'react';

function ImagePopup({ card, onClose, onCloseClick }) {
  return (
    <section className={`popup popup_photo ${card && 'popup_opened'}`} onMouseDown={onCloseClick}>
      <div className="popup__zoom">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <img className="popup__img" src={card?.link} alt={card?.name} />
        <p className="popup__photo-text">{card && card.name}</p>
      </div>
    </section>
  )
}

export default ImagePopup;

