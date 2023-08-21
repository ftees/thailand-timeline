import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHeart, FaShoppingBag, FaRoad, FaMoon, FaCreativeCommonsRemix, FaPhotoVideo, FaHome, FaBuilding, FaSearch } from "react-icons/fa";

export const TimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaHeart />}
      >
        <h3 className="vertical-timeline-element-title">Bangkok love tour</h3>
        <h4 className="vertical-timeline-element-subtitle">Teddy, Mie</h4>
        <p>Let see our love journey in bangkok</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="15/10/2023 16:00"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaShoppingBag />}
      >
        <h3 className="vertical-timeline-element-title">Chatuchak Market</h3>
        <h4 className="vertical-timeline-element-subtitle">
          587/10 Kamphaeng Phet 2 Rd, Chatuchak, Bangkok
        </h4>
        <a
          href="https://www.vntrip.vn/cam-nang/cho-chatuchak-o-bangkok-thai-lan-56873"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="15/10/2023 19:00"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaRoad />}
      >
        <h3 className="vertical-timeline-element-title">Chinatown Bangkok</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Yaowarat, Bangkok.
        </h4>
        <a
          href="https://www.bestprice.vn/blog/diem-den-8/thai-lan-75/pha-dao-china-town-ve-dem-tai-thai-lan_2-2269.html"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="15/10/2023 21:00"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaMoon />}
      >
        <h3 className="vertical-timeline-element-title">Khaosan Rd</h3>
        <h4 className="vertical-timeline-element-subtitle">Khaosan Rd, Khwaeng Talat Yot, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200</h4>
        <a
          href="https://dulichlive.com/thai-lan/di-dau-an-choi-gi-o-khao-san-road-tat-tan-tat-kinh-nghiem.html"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="16/10/2023 9:00"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaCreativeCommonsRemix />}
      >
        <h3 className="vertical-timeline-element-title">
         Boat Noodle
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Baan Kuay Tiew Ruathong, 1/7 Ratchawithi Rd, Samsen Nai, Phaya Thai, Bangkok 10400, Thái Lane</h4>
        <a
          href="https://www.youtube.com/watch?v=JadA4PKvyHA&ab_channel=KhoaiLangThang"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="16/10/2023 10:00"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaHome />}
      >
        <h3 className="vertical-timeline-element-title">
        Wat Benchamabophit 
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Wat Benchamabophit Secondary School, 69 Thanon Si Ayutthaya, Dusit, Dusit District, Bangkok 10300</h4>
        <a
          href="https://zoomtravel.vn/chua-benchamabophit.html"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="16/10/2023 14:00"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaPhotoVideo />}
      >
        <h3 className="vertical-timeline-element-title">
        Bangkok Art and Culture Centre
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bangkok Art and Culture Centre, 939 Rama I Rd, Wang Mai, Pathum Wan, Bangkok 10330</h4>
        <a
          href="https://beexedich.com/bangkok-art-and-culture-center/"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="16/10/2023 16:00"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaBuilding />}
      >
        <h3 className="vertical-timeline-element-title">
        Siam Center
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Siam Center, 979 Rama I Rd, Pathum Wan, Bangkok 10330</h4>
        <a
          href="https://www.tripadvisor.com.vn/Attraction_Review-g293916-d450965-Reviews-Siam_Center-Bangkok.html"
          target="blank"
          style={{
            display: "block",
            color: "#1291e6",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          Touch me please{" "}
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        icon={<FaSearch />}
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          To be continue...
        </h3>
      
      </VerticalTimelineElement>
    
    </VerticalTimeline>
  );
};
