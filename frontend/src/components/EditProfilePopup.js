import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onSubmit, isOpen, onCloseClick, onClose }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, about: description })
  }

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onCloseClick={onCloseClick}
      onClose={onClose}
      name='profile'
      form='profileForm'
      title='Редактировать профиль'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input className="popup__input" id="nameInput" name="name" type="text" placeholder="Имя"
        minLength="2" maxLength="40" value={name} onChange={(e) => setName(e.target.value)} required />
      <span className="popup__input-error" id="nameInput-error" />
      <input className="popup__input" name="about" type="text" placeholder="О себе"
        minLength="2" maxLength="200" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <span className="popup__input-error" id="jobInput-error" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;




