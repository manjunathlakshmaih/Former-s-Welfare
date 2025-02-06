import "./Background.css";
import Background1 from "../../assets/Background-1.jpg";
import Background2 from "../../assets/Background-2.jpg";
import Background3 from "../../assets/Background-3.jpg";
import Background4 from "../../assets/Background-4.jpg";
import Background5 from "../../assets/Background-5.jpg";
import Background6 from "../../assets/Background-6.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={Background3} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={Background5} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={Background4} className="background" alt="" />;
  }
};

export default Background;
