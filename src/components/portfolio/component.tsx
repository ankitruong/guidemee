import styles from './styles.module.css'; 

export const Component = ({item,idx}) => {
  return (
    <section key={idx} style={{backgroundColor:`${item.backgroundColor}`}} className={`container-fluid d-flex align-items-center justify-content-center ${styles.background}`}>
      <div className={`row justify-content-around ${item.isReverse && 'flex-row-reverse'} ${styles.box}`}>
        <div className={`col-6 ${styles.image}`}>
            <img className='img img-fluid' src={item.img} alt=""/>
        </div>
        <div className={`col-5 d-flex flex-column align-items-center justify-content-center`}>
          <h3 className={`${styles.title}`}>{item.title}</h3>
          <p className={`${styles.content}`}>{item.content}</p>
        </div>
      </div>
    </section>
  )
}