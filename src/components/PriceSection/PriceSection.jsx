import React from 'react';
import Button from "../Button";
import styled from './styled/price.module.scss';
import {useTranslation} from "react-i18next";

const PriceSection = ({language}) => {
    const {t} = useTranslation();

    return (
        <section className={styled.container} id="price">
            <div className={styled.oval_one}></div>
            <div className={styled.oval_two}></div>
            <h6 className={styled.title}>{t?.("price.Title")}</h6>
            <div className={styled.price_container}>
                <ul className={styled.list}>
                    <li className={styled.list_items}>{t?.("price.TextListOne")}</li>
                    <li className={styled.list_items}>{t?.("price.TextListTwo")}</li>
                    <li className={styled.list_items}>{t?.("price.TextListThree")}</li>
                    <li className={styled.list_items}>{t?.("price.TextListFour")}</li>
                    <li className={styled.list_items}>{t?.("price.TextListFive")}</li>
                    <p className={styled.text_price}>{language === 'ua'?
                        <span>280₴/місяць</span> : <span>900₽/месяц</span>}</p>
                    <div style={{textAlign:'center'}}>
                        <Button style={{padding:'8px 60px 8px 60px'}}>{t?.("price.Button")}</Button>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default PriceSection;