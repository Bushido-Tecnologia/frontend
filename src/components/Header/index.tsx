"use client"

import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./style.module.css";

import closeIcon from "../../assets/icons/menu-closed.png"
import openIcon from "../../assets/icons/menu-opened.png"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const handleMobileMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateWidth = () => {
            setWidth(window.innerWidth);

            if (width > 767) setShowMenu(false);
        };

        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [width]);

    return (
        <header className={styles.header}>
            <nav>
                <button id="menu" className={styles.header__menu} onClick={handleMobileMenu}>
                    <Image id="menu-icon" src={showMenu ? openIcon : closeIcon} alt="" />
                </button>
                <ul id="nav" className={showMenu ? styles.header__nav__activated : styles.header__nav}>
                    <li className={styles.header__nav__link}>
                        <a href="/">Home</a>
                    </li>

                    <li className={styles.header__nav__link}>
                        <a href="/nossa-equipe">Nossa Equipe</a>
                    </li>

                    <li className={styles.header__nav__link}>
                        <a href="/nossos-projetos">Nossos Projetos</a>
                    </li>

                    <li className={styles.header__nav__link}>
                        <a href="/doe">Doe</a>
                    </li>

                    <li className={styles.header__nav__link}>
                        <a href="/contato">Contato</a>
                    </li>

                    <li className={styles.header__nav__link}>
                        <a href="/transparencia">Transparência</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
