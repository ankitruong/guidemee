import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { translates } from './vi';

export enum LANGUAGE_ENUM {
  VI = 'VI',
  EN = 'EN',
}
export type ILanguages = {
  id: LANGUAGE_ENUM;
  icon: string,
}
export const languages: ILanguages[] = [
  {
    id: LANGUAGE_ENUM.VI,
    icon: '/guidemee/vietnam.png',
  }, 
  {
    id: LANGUAGE_ENUM.EN,
    icon: '/guidemee/united-states.png'
  }
];
export interface IContextTranslateProps {
  lang: LANGUAGE_ENUM,
  setLang: Dispatch<SetStateAction<LANGUAGE_ENUM>>
  t: (v: string, defaultValue?: string) => string,
}

export const TranslateContext = createContext<IContextTranslateProps>({
  lang: LANGUAGE_ENUM.EN,
  setLang: (vlue) => vlue,
  t: (v) => v,
});

export const TranslateProvider = ({ children }: { children: any }) => {
  const [lang, setLang] = useState(LANGUAGE_ENUM.EN)
  const [data, setData] = useState(translates)

  const t = (v: string, defaultValue?: string) => {
    return data[v] || defaultValue || v
  }

  useEffect(() => {
    if(lang === LANGUAGE_ENUM.VI) {
      setData(translates);
    } else {
      setData({})
    }
  }, [lang])

  return (
    <TranslateContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslateContext.Provider>
  )
}

export const useTranslateContext = () => useContext(TranslateContext)