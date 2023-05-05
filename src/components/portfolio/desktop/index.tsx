import styles from './styles.module.css'; 

const data = [
  {
    id: "carrer-path",
    isReverse: false,
    backgroundColor: "#FFFFFF",
    title:"Leap 10x career growth with world-class mentors",
    content: "If you’re looking for advice, jamming, or networking, Guidemee lets you freely schedule a 1:1 mentorship session in fun new ways and work with them directly.",
    img: "/guidemee/person.png"
  },
  {
    id: "carrer-path-mid",
    isReverse: true,
    backgroundColor: "#FAFAFA",
    title:"Visit a career center",
    content: "Taking the time to assess both yourself and your career needs will help you discover the right career path. More than 10,000 job position, more than 300 job categories with various career development orientation from industry experts.",
    img: "/guidemee/person-2.png"
  },
  {
    id: "carrer-path-last",
    isReverse: false,
    backgroundColor:"#F4ECEE",
    title:"Boost your credentials to get hired fast",
    content: "Out of a job, not out of touch. Guidemee lets you list yourself as a talent in the community and get vouched by mentors - boosting your credentials to get hired fast.",
    img: "/guidemee/person-3.png"
  },
];

export const PortfolioComponent = () => {
  return (
    <>
      {
        data.map((i,idx)=>{
          return (
            <div id={i.id} key={idx} style={{backgroundColor:`${i.backgroundColor}`}} className={`container-fluid d-flex align-items-center justify-content-center ${styles.background}`}>
              <div className={`row justify-content-around ${i.isReverse && 'flex-row-reverse'} ${styles.box}`}>
                <div className={`col-6 ${styles.image}`}>
                    <img className='img img-fluid' src={i.img} alt=""/>
                </div>
                <div className={`col-5 d-flex flex-column align-items-center justify-content-center`}>
                  <h3 className={`${styles.title}`}>{i.title}</h3>
                  <p className={`${styles.content}`}>{i.content}</p>
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  )
}