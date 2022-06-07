import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onSubmit, isOpen, onCloseClick, onClose }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ name, link });
  }

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onCloseClick={onCloseClick}
      onClose={onClose}
      name='cardAdd'
      form='formCard'
      title='Новое место'
      buttonText='Создать'
      onSubmit={handleSubmit}
    >
      <input className="popup__input" id="cardname-input" name="name" type="text"
        placeholder="Название" minLength="2" maxLength="30" value={name} onChange={(e) => setName(e.target.value)} required />
      <span className="popup__input-error" id="cardname-input-error" />
      <input className="popup__input" id="link-input" name="link" type="url"
        placeholder="Ссылка на картинку" value={link} onChange={(e) => setLink(e.target.value)} required />
      <span className="popup__input-error" id="link-input-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;