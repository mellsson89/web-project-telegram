import React from 'react';
import styled from './styled/differences.module.scss';
import iconOk from './img/icon-ок.svg'
import iconClose from './img/icon-close.png'
import {useTranslation} from "react-i18next";
const DifferencesSection = () => {
    const {t} = useTranslation();
    return (
        <section>
            <h3 className={styled.title}><span style={{color:'rgb(68, 165, 250)'}}>{t?.("difference.TitleOnePartOne")}</span><br />{t?.("difference.TitleOnePartTwo")}</h3>
            <table cellSpacing="0">
                <tbody>
                <tr>
                    <th></th>
                    <th className={styled.title_table}>{t?.("difference.TitleTableOne")}</th>
                    <th className={styled.title_table}>{t?.("difference.TitleTableTwo")}</th>
                </tr>
                <tr>
                    <td style={{width:'25%'}} className={styled.table_td}>{t?.("difference.TextTableOne")}</td>
                    <td ><img src={iconOk} alt="IconOk" width='30'/></td>
                    <td><img src={iconClose} alt="IconClose" /></td>
                </tr>
                <tr>
                    <td className={styled.table_td}>{t?.("difference.TextTableTwo")}</td>
                    <td><img src={iconOk} alt="IconOk" width='30'/></td>
                    <td><img src={iconClose} alt="IconClose" /></td>
                </tr>
                <tr>
                    <td className={styled.table_td}>{t?.("difference.TextTableThree")}</td>
                    <td><img src={iconOk} alt="IconOk" width='30'/></td>
                    <td><img src={iconClose} alt="IconClose" /></td>
                </tr>
                <tr>
                    <td className={styled.table_td}>{t?.("difference.TextTableFour")}</td>
                    <td><img src={iconOk} alt="IconOk" width='30'/></td>
                    <td><img src={iconClose} alt="IconClose" /></td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default DifferencesSection;