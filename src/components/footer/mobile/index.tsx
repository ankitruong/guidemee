import styles from './styles.module.css';
import Image from 'next/image';

export const FooterComponent = () => {
  return (
    <footer className={`container-fluid ${styles.background} py-4`}>
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="row justify-content-around">
            <div className="col-12">
              <div className="row mb-2">
                <div className="col">
                  <Image src="/guidemee/logo-Horizontal@2x.png" className='mx-auto' alt="" width={200} height={100} />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                Guidemee is a mentorship and expert platform that helps you accelerate your career in various fields.
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Image src="/guidemee/social-Icons.png" className='mx-auto' alt="" width={150} height={100} />
                </div>
              </div>
            </div>
            <div className={styles.space20}></div>
            <div className={`col-12 ${styles.right}`}>
              <div className="row">
                <div className="col-6">
                  <p>Mentee</p>
                  <p>Courses</p>
                  <p>Career path</p>
                  <p>Find a mentor</p>
                </div>
                <div className="col-6">
                  <p>Mentor</p>
                  <p>Hire talent</p>
                  <p>Become a mentor</p>
                </div>
                <div className={styles.space10}></div>
                <div className="col-6">
                  <p>Company</p>
                  <p>About us</p>
                  <p>Help center</p>
                  <p>Partnerships</p>
                  <p>FAQ</p>
                </div>
                <div className="col-6">
                  <p>Legal</p>
                  <p>Terms of service</p>
                  <p>Privacy policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}