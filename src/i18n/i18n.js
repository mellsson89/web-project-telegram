import ru from '../translate/ru.json';
import ua from '../translate/ua.json';
import {initReactI18next} from "react-i18next";
import i18n from "i18next";

const resources ={
    ru : {
        translation: ru
    },
    ua: {
        translation: ua
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:ua
})

export default i18n;