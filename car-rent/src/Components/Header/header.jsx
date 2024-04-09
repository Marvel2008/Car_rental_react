import "./header.css"
import logo from "../../assets/logo.svg"
import { useState } from "react"
export default ({isMain}) => {
    const [active, isActive] = useState(false);

    const toggleMenu = () => {
        isActive(!active); // Змінюємо стан на протилежний поточному
    };
    return (
        <header className={isMain ? "header-main" : "header"}>
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="logo">
                        <img src={logo} className="logo__img" />
                    </a>
                    <nav className="menu">
                        <button className="menu__btn" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className={`menu__list ${active ? 'menu__list--active' : ''}`}>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="/new_cars"> NEW CARS</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="contact.html">PRE-OWNED CARS</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="contact.html">FINANCE</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="contact.html">LEASE VS BUY</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="/contacts">CONTACT US</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )

}