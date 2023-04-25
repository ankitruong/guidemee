import { Component } from './component';
import styles from './styles.module.css'; 

const data = [
  {
    isReverse: false,
    backgroundColor: "#FFFFFF",
    title:"Bước nhảy vọt sự nghiệp với những người cố vấn 1:1",
    content: "Nếu bạn đang tìm kiếm lời khuyên, sự kết nối - Guidemee cho phép bạn tự do lên lịch phiên cố vấn 1:1 theo những cách mới thú vị và  trực tiếp với họ.",
    img: "/guidemee/person.png"
  },
  {
    isReverse: true,
    backgroundColor: "#FAFAFA",
    title:"Khám phá Trung tâm nghề nghiệp",
    content: "Dành thời gian để đánh giá cả bản thân và nhu cầu nghề nghiệp của bạn sẽ giúp bạn khám phá ra con đường sự nghiệp đúng đắn. Hơn 10,000 vị trí nghề nghiệp, hơn 300 nghành nghề khác nhau với các hướng phát triển đa dạng theo tiêu chuẩn và nghiên cứu từ những chuyên gia hàng đầu",
    img: "/guidemee/person-2.png"
  },
  {
    isReverse: false,
    backgroundColor:"#F4ECEE",
    title:"Nâng cao uy tín hồ sơ và thành tích để tìm một công việc nhanh chóng",
    content: "Guidemee cho phép bạn liệt kê mình là một tài năng trong cộng đồng và được các Mentor xác nhận - nâng cao thông tin tìm việc của bạn để được tuyển dụng nhanh chóng.",
    img: "/guidemee/person-3.png"
  },
];

export const PortfolioComponent = () => {
  return (
    <>
      {
        data.map((i,idx)=>{
          return (
            <Component item={i} idx={idx}/>
          );
        })
      }
    </>
  )
}