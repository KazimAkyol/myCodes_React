import "./Msg.css";

import resim from "../assets/tree.webp";
import resim2 from "../assets/winter1.jpg";

const Msg = () => {
  return (
    <div>
      <h2>MSG ALANI</h2>

      <p>hosgeldin react</p>

      {/* public'in icindeki img */}
      <img src="./assets/winter1.jpg" alt="" />

      {/* src icincdeki img */}
      <img src={resim} alt="" />
      <img src={resim2} alt="" />

      {/* google dan aldık */}
      <img
        width="300px"
        src="https://cdn.pixabay.com/photo/2023/06/13/16/25/baby-8061294_1280.jpg"
        alt=""
      />
    </div>
  );
};

export default Msg;
