import React from 'react';
import styled from './styles/footer.module.scss'
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className={styled.footer}>

                <ul className={styled.footerList}>
                    <li>
                    <Link to="/privacy_policy">
                        {t?.("footer.TextOne")}
                    </Link>
                    </li>
                    <li >
                        <Link to="/contact_offerta">
                            {t?.("footer.TextTwo")}
                        </Link></li>
                    <li>{t?.("footer.TextThree")} </li>
                </ul>
        </div>
    );
};

export default Footer;