// localizer.tsx
import Localization from "./localization";
import bokmaal from "./languages/bokmaal";
import {Language} from "./Language";
import engelsk from "./languages/engelsk";

const languages: Record<Language, Localization | Partial<Localization>> = {
    [Language.no]: bokmaal,
    [Language.en]: engelsk,
};

function localizer(lang: Language, key: keyof Localization) {
    return languages[lang][key] ?? bokmaal[key];
}

export {localizer};

