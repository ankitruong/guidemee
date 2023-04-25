import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css';

export const HeaderComponent = () => {
  return (
    <header className={`container-fluid`}>
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
              <Link href="/#hashid" className={styles.link} scroll={false}>
                Career path
              </Link>
            </div>
            <div>
              <Link href="/#findAMentor" className={styles.link} scroll={false}>
                Find a mentor
              </Link>
            </div>
            <div>
              <Link href="/#hashid" className={styles.link} scroll={false}>
                Hire talent
              </Link>
            </div>
            <div>
              <Link href="/#hashid" className={styles.link} scroll={false}>
                Become a mentor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}