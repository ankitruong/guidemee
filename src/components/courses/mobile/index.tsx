import styles from './styles.module.css'; 
const data = [
  {
    avatar:"/guidemee/rectangle-5584.png",
    name:"Marketing",
    title: "Creative Business Instagram",
    introduce:"Mode pumps inspiration skit consumer haiter limited imprint braiding.",
    price: "$25.00",
  },
  {
    avatar:"/guidemee/rectangle-5588.png",
    name:"UI/UX",
    title: "Basic Exploration For UI/UX Design",
    introduce:"Mode pumps inspiration skit consumer haiter limited imprint braiding.",
    price: "$49.00",
  },
  {
    avatar:"/guidemee/rectangle-5590.png",
    name:"Web Development",
    title: "Html and Cas From Zero To Hero",
    introduce:"Mode pumps inspiration skit consumer haiter limited imprint braiding.",
    price: "$110.00",
  },
];

interface IData {
  avatar: string;
  name: string;
  title: string;
  introduce: string;
  price: string;
}

const CardComponent = ({avatar, name, title, introduce, price}: IData) => {
  return (
    <div className={`card ${styles.box}`}>
      <img src={avatar} className="card-img-top" alt="" />
      <div className="card-body p-1">
        <div className={styles.content}>
          <h5 className={`card-title`}>{name}</h5>
          <p className={`card-text`}>{title}</p>
          <p className={`card-text`}>{introduce}</p>
        </div>
        <div className={`d-flex justify-content-between align-items-center`}>
          <div className={`${styles.cardPrice}`}>{price}</div>
          <div>
            <button type="button" className={`btn ${styles.button}`}>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CoursesComponent = () => {
  return (
    <div className={`container-fluid ${styles.background} py-4`}>
      <div className="row h-100">
        <div className={`d-flex flex-column align-items-center justify-content-center`}>
          <h3 className={styles.title}>Discover your personalized learning courses</h3>
          <h5 className={styles.description}>Tailor courses to your unique needs with the most robust customisation tools in the market</h5>
          <div className={`d-flex justify-content-center ${styles.flexGap}`}>
            <button type="button" className={`btn ${styles.button}`}>Design</button>
            <button type="button" className={`btn ${styles.button}`}>Popular</button>
            <button type="button" className={`btn ${styles.button}`}>Marketing</button>
            <button type="button" className={`btn ${styles.button}`}>Development</button>
          </div>
          <div className={styles.space90} />
          <div className={`d-flex justify-content-center ${styles.flexGap}`}>
            {
              data.map((i, idx) => {
                return <CardComponent key={idx} {...i}/>
              })
            }         
          </div>
        </div>
      </div>
    </div>
  )
}