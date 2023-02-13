import React from 'react';
import Menu from "../Menu";
import styled from './styles/headet.module.scss';
import Button from "../Button";
import logo from './img/logo.png'
import ukraine from './img/ukraine.png'
import russia from './img/russia.png';
import i18n from "../../i18n/i18n";
import {useTranslation} from "react-i18next";


const Header = ({language, setLanguage}) => {
    const {t} = useTranslation();

    const handlerLanguageChangeUA =() => {
        if(language === 'ua') {
            return;
        }

        i18n.changeLanguage('ua');
        setLanguage('ua');

    }

    const handlerLanguageChangeRU =() => {
        if(language === 'ru') {
            return;
        }

        i18n.changeLanguage('ru');
        setLanguage('ru');

    }



    function progressBar() {
        let scroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = scroll / height * 100;

        document.getElementById('progressBar').style.width = scrolled + '%';
    }

    window.addEventListener('scroll',progressBar );

    return (
        <div style={{marginBottom:"150px"}}>
            <div id='progressBar' className={styled.progressBar}></div>
            <div className={styled.container}>
                <ul className={styled.list}>
                    <li>
                        <img src={logo} alt="Logo" width='58' />
                    </li>
                    <li>
                        <Menu />
                    </li>
                    <li className={styled.listItems}>
                        <div style={{marginRight:'30px'}}>
                            <Button>{t?.('header.Personal cabinet')}</Button>
                        </div>

                        <div>
                            <button style={{marginRight:'10px',cursor:'pointer'}} onClick={handlerLanguageChangeUA}>
                                <img src={ukraine} alt="Українська мова" width='30'/>
                            </button>
                            <button style={{ cursor:'pointer'}} onClick={handlerLanguageChangeRU}>
                                <img src={russia} alt="Русский язык" width='30'/>
                            </button>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;