import styles from './styles.module.css'; 
const mentees = [
  {
    avatar:"/guidemee/mentee.png",
    name:"Lê Quang Vinh",
    introduce:'"Anh Hoàng là một trong những Mentor tuyệt vời nhất mà mình có. Trước đây mình nghĩ Engineer nên tự tìm hiểu nhưng sự tư vấn và hướng dẫn của anh đã làm mình thay đổi suy nghĩ hoàn toàn"',
    role: "Junior Frontend Developer, TopCV",
  },
  {
    avatar:"/guidemee/mentee-1.png",
    name:"Mya Le Ngo Hoang Anh",
    introduce:'"Mình khá struggle về định hướng công việc dù đang là sinh viên của trường quốc tế. Chị Linh giúp mình tháo gỡ những khó khăn và giải quyết được những mâu thuẫn của mình với gia đình. Mình thực sự biết ơn"',
    role: "Senior year student, RMIT",
  },
  {
    avatar:"/guidemee/mentee-2.png",
    name:"Linh Le Thuy",
    introduce:'"Mình đã gặp khá nhiều mentor ở những nền tảng khác nhưng Guidemee mình đánh giá rất cao cả về chất lượng mentor, sự support và đặc biệt là mục khám phá nghề nghiệp. Mình thích tự mày mò hơn"',
    role: "MKT executive, MB Bank",
  },
];

export const ConversationsComponent = () => {
  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="row h-100">
        <div className={`d-flex flex-column align-items-center justify-content-center`}>
          <h3 className={styles.title}>What our members are saying</h3>
          <div className={`row align-items-center justify-content-center ${styles.flexGap}`}>
            {
              mentees.map((mentee,idx) =>{
                return (
                  <div key={idx} className={`d-flex flex-column ${styles.box}`}>
                    <div className={styles.image}>
                      <img className='img img-fluid rounded-circle' src={mentee.avatar} alt=""/>
                    </div>
                    <div>
                      <p className={styles.introduce}>{mentee.introduce}</p>
                    </div>
                    <div>
                      <p className={styles.name}>{mentee.name}</p>
                      <p className={styles.role}>{mentee.role}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div>
            <button type="button" className={`btn ${styles.button}`}>Find a Mentor</button>
          </div>
        </div>
      </div>
    </div>
  )
}