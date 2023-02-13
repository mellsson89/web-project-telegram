import React from 'react';
import masterCard from "./img/master_card.svg";
import visa from "./img/visa.svg";
import mir from "./img/mir.svg";
import bitcoin from "./img/bitcoin.png";
import tether from "./img/thether.png";
import styled from './styled/pay.module.scss'

const PaySection = ({language}) => {
    return (
        <section className={styled.section}>
            {language === 'ua' ?
                <ul className={styled.pay_list}>
                    <li><img src={masterCard} alt="MasterCard"  /></li>
                    <li className={styled.pay_list_items}><img src={visa} alt="Visa"  /></li>
                    <li className={styled.pay_list_items}><img src={bitcoin} alt="Bitcoin" width='130px'/></li>
                    <li className={styled.pay_list_items}><img src={tether} alt="Tether" width='130px' /></li>
                </ul> :
                <ul className={styled.pay_list}>
                    <li><img src={masterCard} alt="MasterCard"  /></li>
                    <li className={styled.pay_list_items}><img src={visa} alt="Visa"  /></li>
                    <li className={styled.pay_list_items}><img src={mir} alt="Mir" /></li>
                    <li className={styled.pay_list_items}><img src={bitcoin} alt="Bitcoin" width='130px'/></li>
                    <li className={styled.pay_list_items}><img src={tether} alt="Tether" width='130px' /></li>
                </ul>
            }
        </section>
    );
};

export default PaySection;