import styles from './styles.module.css'; 

export const TrademarkComponent = () => {
  return (
    <div className={`container-fluid ${styles.background} py-4`}>
      <div className="row justify-content-center">
        <div className={`col-9 ${styles.content}`}>
          <img className='img img-fluid' src="/guidemee/wrapper.png" alt=""/>
        </div>
      </div>
    </div>
  )
}