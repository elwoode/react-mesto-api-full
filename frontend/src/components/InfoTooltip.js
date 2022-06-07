function InfoTooltip({ isOpen, onCloseClick, image, title, onClose }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={onCloseClick}>
      <div className="popup__info">
        <img className="popup__status" src={image} alt={title} />
        <h2 className="popup__message">{title}</h2>
        <button className="popup__close-button" type="button" title="Закрыть" onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;