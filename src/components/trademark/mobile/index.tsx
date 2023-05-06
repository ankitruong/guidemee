import { useTranslateContext } from '../../../contexts/translate';
import styles from './styles.module.css'; 
import Image from 'next/image'
export const TrademarkComponent = () => {
  const {t} = useTranslateContext()
  return (
    <div className={`container-fluid ${styles.background} py-4`}>
      <div className="row justify-content-center">
        <div className={`col-12 ${styles.content}`}>
          <h2 className={`${styles.title}`}>
            {t('Meet 500+ mentors from top companies')}
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className={`${styles.brands}`}>
          <Image className='img img-fluid' src="/guidemee/brands.png" alt="" width={300} height={150}/>
        </div>
      </div>
    </div>
  )
}