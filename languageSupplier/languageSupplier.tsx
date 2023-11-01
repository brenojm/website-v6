import { useLanguage } from "@/context/LanguageContext";
import { ptbr } from "./languages/pt-br/ptbr";
import { eng } from "./languages/eng/eng";

interface DictionaryEntry {
  id: string;
  stringName: string;
}

export type DictionaryProps = DictionaryEntry[];

export const findStringByName = (stringName: string): string => {
    const { language } = useLanguage();
    const stringList: DictionaryProps = language === "ptbr" ? ptbr : eng;

    for (const entry of stringList) {
        if (entry.stringName.includes(stringName)) {
            return entry.stringName;
        }
    }

    return "String not found";
};

export const findStringById = (id: string): string => {
    const { language } = useLanguage();
    const stringList: DictionaryProps = language === "ptbr" ? ptbr : eng;

    for (const entry of stringList) {
        if (entry.id === id) {
            return entry.stringName;
        }
    }

    return "String not found";
};
