function PopupWithForm({ children, name, title, isOpen, onClose, form, buttonText, onSubmit, onCloseClick }) {
  return (
    <section className={`popup popup_form_${name} ${isOpen && `popup_opened`}`} onClick={onCloseClick}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={form} onSubmit={onSubmit}>
          {children}
          <button className="popup__button" type="submit">{buttonText}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;


