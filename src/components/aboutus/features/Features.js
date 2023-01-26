import MarketPlace from "./MarketPlace";
import Acquisition from "./Acquisition";
import Demand from "./Demand";
import arrowHead from "../../../assets/img/about/arrow-head.svg";

const Features = ({ onClickToImage }) => {
  return (
    <div>
      <div
        onClick={() => {
          onClickToImage();
        }}
        className="w-fit"
        style={{
          transition: "transform .5s",
          transform: `rotate(180deg )`,
        }}>
        <img src={arrowHead} className="w-[3vw]" />
      </div>

      <div className="w-[80vw] ml-[5vw] mt-[10vh]">
        <MarketPlace />
        <Acquisition />
        <Demand />
      </div>
    </div>
  );
};

export default Features;
