import { createContext } from 'react';

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
export const TranslateContext = createContext<LANGUAGE_ENUM>(LANGUAGE_ENUM.EN);
