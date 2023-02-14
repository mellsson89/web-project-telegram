import React, {useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TelegramSection from "../../components/TelegramSection";
import DifferencesSection from "../../components/DifferencesSection";
import ActivationSection from "../../components/ActivationSection";
import styled from './styles/homepage.module.scss';
import PriceSection from "../../components/PriceSection";
import PaySection from "../../components/PaySection";
import i18n from "../../i18n/i18n";
import useLocalStorage from "../../hooks/useLocalStorage";


const HomePage = () => {
    const [language,setLanguage] = useLocalStorage('language', 'ua');

    useEffect(() => {

        if (language === 'ua') {
            i18n.changeLanguage('ua');
            setLanguage('ua');
            return;
        }
        if (language === 'ru') {
            i18n.changeLanguage('ru');
            setLanguage('ru');

        }

    }, [language, setLanguage]);

    return (
        <>
            <Header language={language} setLanguage={setLanguage} />
            <div className={styled.container}>
                <TelegramSection/>
                <DifferencesSection />
                <ActivationSection />
                <PriceSection language={language}/>
                <PaySection language={language} />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;