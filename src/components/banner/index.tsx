import styles from './styles.module.css';

export const BannerComponent = () => {
  return (
    <section className={`container ${styles.banner}`}>
      <div className='row align-items-center h-100'>
        <div className={`col-10 justify-content-between text-center ${styles.content} mx-auto`}>
          <h2 className={styles.title}>Supercharge your career</h2>
          <h4 className={`${styles.descriptions} mx-auto`}>97% of mentees say having a mentor makes a positive impact to their future career progression.</h4>
        </div>
      </div>
    </section>
  )
}