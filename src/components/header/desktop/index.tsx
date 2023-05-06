/* eslint-disable react/display-name */
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css';
import { useState } from 'react';
import { LANGUAGE_ENUM, useTranslateContext } from '../../../contexts/translate';
import { RenderFlagLangquage } from '../common';



export const HeaderComponent = () => {
  const { setLang, t, lang } = useTranslateContext();
  
  const findAMentorLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe7Ha_UwLU7VPhn-XfKjwjOulaxgmT6v-XhyghcchNeDxm42A/viewform?fbclid=IwAR3LQ2LRrlXBRUzx46vdAPeDGBUR_T6yhgOVqN6olhzS1yt5NaG7gUUQWqc';

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
                {t('Courses')}
              </Link>
            </div>
            <div>
              <Link href="/#carrer-path" className={styles.link} scroll={false}>
                {t('Career path')}
              </Link>
            </div>
            <div>
              <Link href="/#hashid" className={styles.link} scroll={false}>
                {t('Hire talent')}
              </Link>
            </div>
            <div>
              <Link href="/#findAMentor" className={styles.link} scroll={false}>
                {t('Find a mentor')}
              </Link>
            </div>
            <div>
              <Link href={findAMentorLink} className={styles.link} scroll={false}>
                {t('Become a mentor')}
              </Link>
            </div>
            <div className={styles.flag}>
              <RenderFlagLangquage onFlagClicked={(id) => {
                setLang(id);
              }} lang={lang}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}