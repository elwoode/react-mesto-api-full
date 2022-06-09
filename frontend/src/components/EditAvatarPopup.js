import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onSubmit, isOpen, onCloseClick, onClose }) {
  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      avatar: inputRef.current.value
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onCloseClick={onCloseClick}
      onClose={onClose}
      name='avatar'
      form='formAvatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input ref={inputRef} className="popup__input" id="link-input-avatar" placeholder="Ссылка на картинку"
        type="url" name="avatar" required />
      <span className="popup__input-error" id="link-input-avatar-error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;