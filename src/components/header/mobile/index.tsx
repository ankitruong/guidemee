/* eslint-disable react/display-name */
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Burger } from '../../burger';
import { StyledMenu } from './styled';
import { useTranslateContext } from '../../../contexts/translate';
import { RenderFlagLangquage } from '../common';

export const HeaderComponent = () => {
  const findAMentorLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe7Ha_UwLU7VPhn-XfKjwjOulaxgmT6v-XhyghcchNeDxm42A/viewform?fbclid=IwAR3LQ2LRrlXBRUzx46vdAPeDGBUR_T6yhgOVqN6olhzS1yt5NaG7gUUQWqc';
  const { setLang, t, lang } = useTranslateContext();
  const [open, setOpen] = useState(false);
  const [isOpened, setisOpened] = useState(false);

  useEffect(() => {
    isOpened && setOpen(isOpened)
  }, [isOpened])

  return (
    <header className={`container-fluid ${styles.containerHeader}`}>
      <div className={`row align-items-center ${styles.header}`}>
        <div className='col-5'>
          <Image className={styles.logo} src="/guidemee/logo-Horizontal@2x.png" alt="" width={100} height={100} />
        </div>
        <div className='col-7'>
          <Burger open={open} setOpen={() => {
            setOpen(!open)
          }}/>
        </div>
      </div>
      <StyledMenu open={open}>
        <div className='d-flex flex-column align-items-left'>
          <div className={`my-2`} onClick={() => setOpen(false)}>
            <Link href="/#courses" className={styles.link} scroll={false}>
              {t('Courses')}
            </Link>
          </div>
          <div className={`my-2`} onClick={() => setOpen(false)}>
            <Link href="/#carrer-path" className={styles.link} scroll={false}>
              {t('Career path')}
            </Link>
          </div>
          <div className={`my-2`} onClick={() => setOpen(false)}>
            <Link href="/#hashid" className={styles.link} scroll={false}>
              {t('Hire talent')}
            </Link>
          </div>
          <div className={`my-2`} onClick={() => setOpen(false)}>
            <Link href="/#findAMentor" className={styles.link} scroll={false}>
              {t('Find a mentor')}
            </Link>
          </div>
          <div className={`my-2`} onClick={() => setOpen(false)}>
            <Link href={findAMentorLink} className={styles.link} scroll={false}>
              {t('Become a mentor')}
            </Link>
          </div>
          <div className={`my-2 ${styles.flag}`} onClick={() => setOpen(false)}>
            <RenderFlagLangquage onFlagClicked={(id) => {
              setLang(id);
            }} lang={lang}/>
          </div>
        </div>
      </StyledMenu>
    </header>
  )
}