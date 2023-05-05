/* eslint-disable react/display-name */
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { forwardRef } from 'react';

enum LANGUAGE_ENUM {
  VI = 'VI',
  EN = 'EN',
}
type ILanguages = {
  id: LANGUAGE_ENUM;
  icon: string,
}
const languages: ILanguages[] = [
  {
    id: LANGUAGE_ENUM.VI,
    icon: '/guidemee/vietnam.png',
  }, 
  {
    id: LANGUAGE_ENUM.EN,
    icon: '/guidemee/united-states.png'
  }
];

const RenderFlagLangquage = ({ lang }: { lang: LANGUAGE_ENUM }) => {
  const currLang = languages.find(i => i.id === lang);
  return !currLang 
  ? null
  : (
    <Image src={currLang.icon} alt="" width={100} height={100} />
    // <img className='img img-fluid' src={currLang.icon} alt=""/>
  );
}

export const HeaderComponent = () => {
  const findAMentorLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe7Ha_UwLU7VPhn-XfKjwjOulaxgmT6v-XhyghcchNeDxm42A/viewform?fbclid=IwAR3LQ2LRrlXBRUzx46vdAPeDGBUR_T6yhgOVqN6olhzS1yt5NaG7gUUQWqc';
  const [currLang, setcurrLang] = useState<LANGUAGE_ENUM>(LANGUAGE_ENUM.VI);
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
            <Dropdown className={`d-inline-block ${styles.dropdown}`}>
              <Dropdown.Toggle variant='outline-light' id="dropdown-basic">
              <div className={styles.flag}>
                <RenderFlagLangquage lang={currLang}/>
              </div>

              </Dropdown.Toggle>

              <Dropdown.Menu className={`w-100 ${styles.dropdownMenu}`}>
                {
                  languages.filter(i => i.id !== currLang).map((i, idx) => (
                    <Dropdown.ItemText key={i.id} onClick={() => setcurrLang(i.id)}>
                      <RenderFlagLangquage lang={i.id}/>
                    </Dropdown.ItemText>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  )
}