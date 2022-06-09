import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(email, password);
  }

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input" type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input className="login__input" type="password" placeholder="Пароль" value={password} autoComplete="on"
          onChange={(e) => setPassword(e.target.value)} required />
        <button className="login__button" type="submit">Зарегистрироваться</button>
      </form>
      <p className="login__text">Уже зарегистрированы?<Link to="/sign-in" className="login__link">Войти</Link></p>
    </section>
  );
}

export default Register;