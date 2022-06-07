import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(email, password);
  }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input" type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input className="login__input" type="password" placeholder="Пароль" value={password} autoComplete="on"
          onChange={(e) => setPassword(e.target.value)} required />
        <button className="login__button" type="submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;