import React from 'react';
import styled from './styles/menu.module.scss'
import {useTranslation} from "react-i18next";
import { Link } from "react-scroll";
import {Link as Links} from 'react-router-dom'
const Menu = () => {
    const {t} = useTranslation();
    return (
        <nav>
            <ul className={styled.menu}>
                <li className={styled.menuItems}>
                    <Link
                        className={styled.link}
                        to="price"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}>
                        {t?.('header.Rate')}
                    </Link>
                </li>
                <li className={styled.menuItems}>{t?.('header.Support')}</li>
                <li>
                    <Links
                        to="/swagger"
                        className={styled.link}
                    > {t?.('header.Documentation')}
                    </Links>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;