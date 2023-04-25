import styles from './styles.module.css'; 

const data1 = [
  'Thiết kế, UIUX',
  'Công nghệ',
  'Data',
  'Sản phẩm',
  'Business Analyst',
]
const data2 = [
  'Marketing',
  'Freelancing',
  'HR',
  'Sáng tạo nội dung',
]
const data3 = [
  'Startups',
  'Học bổng',
  'Du học',
  'Bán hàng',
  'Khác',
]
export const FieldComponent = () => {
  return (
    <section id="courses" className={`container-fluid ${styles.background}`}>
      <div className={`row h-100 justify-content-center align-items-center`}>
        <div className={`col-12 text-center mx-auto`}>
          <h2 className={styles.title}>Tìm kiếm Mentor trong lĩnh vực mà bạn đang theo đuổi</h2>
          <div className={`d-flex justify-content-center mb-2 ${styles.flexGap}`}>
            {
              data1.map((i, index) => {
                return (
                  <div className={`${styles.flexGap}`} key={index + i}>
                    <button type="button" className={`btn bg-white ${styles.button}`}>
                      <p>
                        {i}
                      </p>
                    </button>
                  </div>
                )
              })
            }
          </div>
          <div className={`d-flex justify-content-center mb-2 ${styles.flexGap}`}>
            {
              data2.map((i, index) => {
                return (
                  <div className={`${styles.flexGap}`} key={index + i}>
                    <button type="button" className={`btn bg-white ${styles.button}`}>
                      <p>
                        {i}
                      </p>
                    </button>
                  </div>
                )
              })
            }
          </div>
          <div className={`d-flex justify-content-center mb-2 ${styles.flexGap}`}>
            {
              data3.map((i, index) => {
                return (
                  <div className={`${styles.flexGap}`} key={index + i}>
                    <button type="button" className={`btn bg-white ${styles.button}`}>
                      <p>
                        {i}
                      </p>
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}