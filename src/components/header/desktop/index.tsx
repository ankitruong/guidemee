/* eslint-disable react/display-name */
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { LANGUAGE_ENUM, TranslateContext, languages } from '../../../contexts/translate';

const RenderFlagLangquage = ({ lang, onFlagClicked }: { lang: LANGUAGE_ENUM, onFlagClicked: (id: LANGUAGE_ENUM) => void }) => {
  const currFlag = languages.find(i => i.id !== lang);
  return currFlag 
  ? <Image src={currFlag.icon} onClick={() => onFlagClicked(currFlag.id)} alt="" width={100} height={100} />
  : null;
}

export const HeaderComponent = () => {
  const findAMentorLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe7Ha_UwLU7VPhn-XfKjwjOulaxgmT6v-XhyghcchNeDxm42A/viewform?fbclid=IwAR3LQ2LRrlXBRUzx46vdAPeDGBUR_T6yhgOVqN6olhzS1yt5NaG7gUUQWqc';
  const [currLang, setcurrLang] = useState<LANGUAGE_ENUM>(LANGUAGE_ENUM.VI);
  // const currLang = useContext(TranslateContext)
  return (
    <header className={`container-fluid ${styles.containerHeader}`}>
      <div className={`row align-items-center ${styles.header}`}>
        <div className='col-5'>
          <Image className={styles.logo} src="/guidemee/logo-Horizontal@2x.png" alt="" width={100} height={100} />
        </div>
        <div className='col-7'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <Link href="/#courses" className={styles.link} scroll={false}>
                Courses
              </Link>
            </div>
            <div>
              <Link href="/#carrer-path" className={styles.link} scroll={false}>
                Career path
              </Link>
            </div>
            <div>
              <Link href="/#hashid" className={styles.link} scroll={false}>
                Hire talent
              </Link>
            </div>
            <div>
              <Link href="/#findAMentor" className={styles.link} scroll={false}>
                Find a mentor
              </Link>
            </div>
            <div>
              <Link href={findAMentorLink} className={styles.link} scroll={false}>
                Become a mentor
              </Link>
            </div>
            <div className={styles.flag}>
              <RenderFlagLangquage onFlagClicked={(id) => setcurrLang(id)} lang={currLang}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}