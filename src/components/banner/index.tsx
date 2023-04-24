import styles from './styles.module.css';

export const BannerComponent = () => {
  return (
    <section className={`container-fluid ${styles.banner}`}>
      <div className={`row h-100 justify-content-center align-items-center`}>
        <div className={`col-10 text-center mx-auto`}>
          <h2 className={styles.title}>Supercharge your career</h2>
          <h4 className={`${styles.descriptions} mx-auto`}>97% of mentees say having a mentor makes a positive impact to their future career progression.</h4>
          <div className={`row justify-content-center`}>
            <div className="col-5">
              <div className="row">
                <div className="col">
                  <button type="button" className={`btn bg-white btn-outline-dark ${styles.button}`}>Trở thành Mentor</button>
                </div>
                <div className="col">
                  <button type="button" className={`btn bg-white btn-outline-dark ${styles.button}`}>Tìm kiếm Mentor</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}