import { useTranslateContext } from '../../../contexts/translate';
import styles from './styles.module.css';
import Image from 'next/image';

export const FooterComponent = () => {
  const { t } = useTranslateContext();

  return (
    <footer className={`container-fluid ${styles.background}`}>
      <div className="row align-items-center justify-content-center">
        <div className="col-10">
          <div className="row justify-content-around">
            <div className="col-4">
              <div className="row mb-4">
                <div className="col">
                  <Image src="/guidemee/logo-Horizontal@2x.png" alt="" width={200} height={100} />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                {t('Guidemee is a mentorship and expert platform that helps you accelerate your career in various fields.')}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Image src="/guidemee/social-Icons.png" alt="" width={150} height={100} />
                </div>
              </div>
            </div>
            <div className={`col-7 ${styles.right}`}>
              <div className="row">
                <div className="col">
                  <p>{t('Mentee')}</p>
                  <p>{t('Courses')}</p>
                  <p>{t('Career path')}</p>
                  <p>{t('Find a mentor')}</p>
                </div>
                <div className="col">
                  <p>{t('Mentor')}</p>
                  <p>{t('Hire talent')}</p>
                  <p>{t('Become a mentor')}</p>
                </div>
                <div className="col">
                  <p>{t('Company')}</p>
                  <p>{t('About us')}</p>
                  <p>{t('Help center')}</p>
                  <p>{t('Partnerships')}</p>
                  <p>{t('FAQ')}</p>
                </div>
                <div className="col">
                  <p>{t('Legal')}</p>
                  <p>{t('Terms of service')}</p>
                  <p>{t('Privacy policy')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}