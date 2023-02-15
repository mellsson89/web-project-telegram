import React from 'react';
import Button from "../Button";
import iphone from "./img/iphone.png";
import telegram from "./img/telegram.png"
import styled from './styles/telegram.module.scss';
// import Lottie from "lottie-react";
// import animationTelegramOne from './img/Telegram-3.json';
// import animationTelegramTwo from './img/telegram.json';
import {useTranslation} from "react-i18next";

const TelegramSection = () => {
    const {t} = useTranslation();

    return (
        <section className={styled.container}>
            <div className={styled.oval}></div>
            <div className={styled.oval_two}></div>
            <div className={styled.oval_three}></div>
            <div className={styled.oval_four}></div>
            <div className={styled.oval_five}></div>
            <div>
                <h1 className={styled.title}>Telegram userbot api</h1>
                <h2 className={styled.title_min}>{t?.("telegram.IntegrationOne")} <br /> {t?.("telegram.IntegrationTwo")} </h2>
                <p>{t?.("telegram.StableApi")}</p>
                <ul className={styled.list}>
                    <li className={styled.list_items}><span style={{color:'rgb(68, 165, 250)'}}>{t?.("telegram.ListOne")}</span> {t?.("telegram.ListOnePartTwo")}</li>
                    <li className={styled.list_items}>{t?.("telegram.ListTwo")} <span style={{color:'rgb(68, 165, 250)'}}>{t?.("telegram.ListTwoPartTwo")} </span></li>
                    <li className={styled.list_items}>{t?.("telegram.ListThree")} <span style={{color:'rgb(68, 165, 250)'}}> {t?.("telegram.ListThreePartTwo")}</span> {t?.("telegram.ListThreePartTree")}</li>
                </ul>
                <Button style={{padding:'15px 30px 15px 30px'}}>{t?.("telegram.Button")}</Button>
            </div>
            <div className={styled.container_message}>
                <div className={styled.container_iphone}>
                    <img src={iphone} alt="Iphone" width='500'/>
                </div>
                <div className={styled.icon_container_big}>
                    <div className={styled.icon_big}></div>
                </div>
                <div className={styled.icon_container_small_one}>
                    <div className={styled.icon_small}></div>
                </div>
                <div className={styled.icon_container_small_two}>
                    <div className={styled.icon_small}></div>
                </div>

                <div className={styled.message_one}>
                    <div className={styled.message_one_info}>
                        <img src={telegram} alt="Telegram" width='70' height='70'/>
                    <div className={styled.message_one_info_container}>
                        <p className={styled.message_one_info_title}>{t?.("telegram.MessageOneTitle")} </p>
                        <p className={styled.message_one_info_text}>{t?.("telegram.MessageOneText")}💅 {t?.("telegram.MessageOneTextPartTwo")} <br />{t?.("telegram.MessageOneTextPartThree")}</p>
                    </div>
                        <div className={styled.message_one_info_status}>
                            <p>{t?.("telegram.MessageOneStatus")}</p>
                        </div>
                    </div>
                </div>

                <div className={styled.message_two}>
                    <div className={styled.message_two_info}>
                        <img src={telegram} alt="Telegram" width='60' height='60'/>
                        <div className={styled.message_two_info_container}>
                            <p className={styled.message_two_info_title}>{t?.("telegram.MessageTwoTitle")}</p>
                            <p className={styled.message_two_info_text}>{t?.("telegram.MessageTwoText")}⏰ {t?.("telegram.MessageTwoTextPartTwo")}<br /> {t?.("telegram.MessageTwoTextPartThree")}</p>
                        </div>
                        <div className={styled.message_two_info_status}>
                            <p>сейчас</p>
                        </div>
                    </div>
                </div>

                <div className={styled.message_three}>
                    <div className={styled.message_three_info}>
                        <img src={telegram} alt="Telegram" width='50' height='50'/>
                        <div className={styled.message_three_info_container}>
                            <p className={styled.message_three_info_title}>{t?.("telegram.MessageThreeTitle")}</p>
                            <p className={styled.message_three_info_text}>{t?.("telegram.MessageThreeText")}<br />{t?.("telegram.MessageThreeTextPartTwo")}</p>
                        </div>
                        <div className={styled.message_three_info_status}>
                            <p>сейчас</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TelegramSection;