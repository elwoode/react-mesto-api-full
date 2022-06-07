import { useState } from 'react';

import { Link, Route, Routes } from "react-router-dom";
import logo from "../images/logo.svg";


function Header({ emailName, onSignOut }) {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <header className={`header ${isBurgerMenuOpen && `header_burger-menu`}`}>
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      <nav className="header__auth">
        <Routes>
          <Route exact path="/" element={
            <>
              <p className="header__text">{emailName}</p>
              <Link to="/sign-in" className="header__link" onClick={onSignOut}>Выйти</Link>
            </>
          } />
          <Route exact path="/sign-in" element={
            <>
              <Link to="/sign-up" className="header__link">Регистрация</Link>
            </>
          } />
          <Route exact path="/sign-up" element={
            <>
              <Link to="/sign-in" className="header__link">Войти</Link>
            </>
          } />
        </Routes>
      </nav>
      <span className={`burger-menu ${isBurgerMenuOpen && `burger-menu_active`}`} onClick={toggleBurgerMenu} />
    </header>
  )

};
export default Header;