import * as Localization from "expo-localization";
import i18n from "i18n-js";
import tr from "./tr.json";
import en from "./en.json";
import {MainStore} from "../stores/MainStore";
i18n.translations = {
    "tr-TR": tr,
    "en-US": en
}

if(!MainStore.getLanguage) MainStore.setLanguage(Localization.locale);

i18n.locale = MainStore.getLanguage;
i18n.fallback = true;

export const t = (name, params = {}) => i18n.t(name, params);

export default i18n;