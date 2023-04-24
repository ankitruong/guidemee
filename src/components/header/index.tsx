import styles from './styles.module.css';
import Image from 'next/image'

export const HeaderComponent = () => {
  return (
    <header className={`container-fluid`}>
      <div className={`row align-items-center ${styles.header}`}>
        <div className='col-5'>
          <Image className={styles.logo} src="/guidemee/logo-Horizontal@2x.png" alt="" width={100} height={100} />
        </div>
        <div className='col-7'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>Courses</div>
            <div>Career path</div>
            <div>Find a mentor</div>
            <div>Hire talent</div>
            <div>Become a mentor</div>
          </div>
        </div>
      </div>
    </header>
  )
}