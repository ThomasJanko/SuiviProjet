import React, { useEffect } from "react";
import Link from "next/link";
import logo from "../public/assets/logo.png";

const Header = () => {

  return (
    <div className="header__main bg_primary">
      <div className="header__logo">
      <Link href="/">
        <img src={logo.src} alt="Quick'Up" />
      </Link>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link"><ion-icon name="home-outline"></ion-icon></a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/shop">
              <a className="nav__link"><ion-icon name="pricetags-outline"></ion-icon></a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/cart">
              <a className="nav__link"><ion-icon name="cart-outline"></ion-icon></a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about">
              <a className="nav__link"><ion-icon name="information-circle-outline"></ion-icon></a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/profil">
              <a className="nav__link"><ion-icon name="person-circle-outline"></ion-icon></a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/login">
              <a className="nav__link"><ion-icon name="key-outline"></ion-icon></a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
