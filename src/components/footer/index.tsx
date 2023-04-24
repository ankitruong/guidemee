import styles from './styles.module.css';
import Image from 'next/image';

export const FooterComponent = () => {
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
                Guidemee là nền tảng kết nối Mentor - Mentee trên nhiều lĩnh vực hướng tới những cơ hội việc làm hàng đầu cho giới trẻ Việt Nam
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
                  <p>Mentee</p>
                  <p>Khoá học</p>
                  <p>Khám phá nghề nghiệp</p>
                  <p>Tìm kiếm Mentor</p>
                </div>
                <div className="col">
                  <p>Mentor</p>
                  <p>Tuyển dụng</p>
                  <p>Trở thành Mentor</p>
                </div>
                <div className="col">
                  <p>Company</p>
                  <p>Về chúng tôi</p>
                  <p>Trung tâm trợ giúp</p>
                  <p>Hợp tác</p>
                  <p>FAQ</p>
                </div>
                <div className="col">
                  <p>Legal</p>
                  <p>Điều khoản sử dụng</p>
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