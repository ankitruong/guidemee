import styles from './styles.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const TOTAL_STAR = 5;

const mentors = [
  {
    avatar:"/guidemee/mentor.png",
    name:"Huong Pham",
    description:"Senior UX Manager, Tiki",
    starNumber: 4,
    numberVote: "2.1k"
  },
  {
    avatar:"/guidemee/mentor-1.png",
    name:"Le Ngo Hoang Anh",
    description:"Sr. Product Manager, P&G",
    starNumber: 4,
    numberVote: "76"
  },
  {
    avatar:"/guidemee/mentor-2.png",
    name:"Nguyen Huu Minh",
    description:"Full-Tuition Scholarship , Harvard",
    starNumber: 4,
    numberVote: "1.6k"
  },
  {
    avatar:"/guidemee/mentor-3.png",
    name:"Jenny Nguyen",
    description:"VP of Sales, VN Market, Grab",
    starNumber: 4,
    numberVote: "978"
  },
];

function starComponent(star: number) {
  const result = [];
  for(let i = 1; i <= TOTAL_STAR; i++){
    if(i <= star){
      result.push(
        <span>
          <FontAwesomeIcon 
            icon={faStar}
            style={{ color: "#E83777" }}
          />
        </span>
      );
    }else {
      result.push(
        <span>
          <FontAwesomeIcon 
            icon={faStar}
            style={{ color: "#F8C3D6" }}
          />
        </span>
      );
    }
  }
  return result
};

export const MentorsComponent = () => {
  return (
    <div id="findAMentor" className={`container-fluid ${styles.background} py-4`}>
      <div className="row h-100">
        <div className={`d-flex flex-column align-items-center justify-content-center`}>
          <h3 className={styles.title}>Meet our mentors</h3>
          <div className={`row align-items-center justify-content-center ${styles.flexGap}`}>
            {
              mentors.map((mentor,idx)=>{
                return (
                  <div key={idx} className={`card ${styles.box}`}>
                    <img src={mentor.avatar} className="card-img-top" alt="" />
                    <div className="card-body p-1">
                      <div className={styles.content}>
                        <h5 className={`card-title ${styles.name} mb-0`}>{mentor.name}</h5>
                        <p className={`card-title ${styles.description}`}>{mentor.description}</p>
                      </div>
                      <div>
                        {...starComponent(mentor.starNumber)}
                        <span className={styles.starNumber}>
                          {mentor.numberVote}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}