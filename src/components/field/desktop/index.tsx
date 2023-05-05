import styles from './styles.module.css'; 

const data1 = [
  'Design',
  'Technology',
  'Product',
  'Business Analyst',
  'Data',
]
const data2 = [
  'Marketing',
  'Freelancing',
  'Human Resources',
  'Content Creation',
]
const data3 = [
  'Startups',
  'Scholarships',
  'Business Development',
  'HR',
  'Others',
]
export const FieldComponent = () => {
  return (
    <div id="courses" className={`container-fluid ${styles.background}`}>
      <div className={`row h-100 justify-content-center align-items-center`}>
        <div className={`col-12 text-center mx-auto`}>
          <h2 className={styles.title}>Find a mentor in your field</h2>
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
    </div>
  )
}