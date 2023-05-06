import Image from 'next/image'
import { LANGUAGE_ENUM, languages } from '../../../contexts/translate';

export const RenderFlagLangquage = ({ lang, onFlagClicked }: { lang: LANGUAGE_ENUM, onFlagClicked: (id: LANGUAGE_ENUM) => void }) => {
  const currFlag = languages.find(i => i.id !== lang);
  return currFlag 
  ? <Image src={currFlag.icon} onClick={() => onFlagClicked(currFlag.id)} alt="" width={100} height={100} />
  : null;
}