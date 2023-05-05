import styles from './styles.module.css';
import Router from 'next/router'

export const BannerComponent = () => {
  const findAMentorLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe7Ha_UwLU7VPhn-XfKjwjOulaxgmT6v-XhyghcchNeDxm42A/viewform?fbclid=IwAR3LQ2LRrlXBRUzx46vdAPeDGBUR_T6yhgOVqN6olhzS1yt5NaG7gUUQWqc';
  return (
    <div className={`container-fluid ${styles.banner} py-4`}>
      <div className={`row h-100 justify-content-center align-items-center`}>
        <div className={`col-12 text-center mx-auto`}>
          <h2 className={styles.title}>Supercharge your career</h2>
          <h4 className={`${styles.descriptions} mx-auto`}>97% of mentees say having a mentor makes a positive impact to their future career progression.</h4>
          <div className={`d-flex justify-content-center ${styles.flexGap}`}>
            <button type="button" onClick={() => Router.push(findAMentorLink)} className={`btn bg-white btn-outline-dark ${styles.button}`}>Find a mentor</button>
            <button type="button" onClick={() => Router.push(findAMentorLink)} className={`btn bg-white btn-outline-dark ${styles.button}`}>Become a mentor</button>
          </div>
        </div>
      </div>
    </div>
  )
}