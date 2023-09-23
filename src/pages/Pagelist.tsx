import React from "react";
import Robottok1 from "../imagesfarm/farmlist/farm1.png";
import Robottok2 from "../imagesfarm/farmlist/farm2.png";
import Robottok3 from "../imagesfarm/farmlist/farm3.png";
import Robottok4 from "../imagesfarm/farmlist/farm4.png";
import Robottok5 from "../imagesfarm/farmlist/farm5.png";
import Robottok6 from "../imagesfarm/farmlist/farm6.png";
import Robottok7 from "../imagesfarm/farmlist/farm7.png";
import Robottok8 from "../imagesfarm/farmlist/farm8.png";
import Robottok9 from "../imagesfarm/farmlist/farm9.png";
import Robottok10 from "../imagesfarm/farmlist/farm10.png";
import Robottok11 from "../imagesfarm/farmlist/farm11.png";
import Robottok12 from "../imagesfarm/farmlist/farm12.png";
import Robottok13 from "../imagesfarm/farmlist/farm13.png";

const RobottokImages = [
  { src: Robottok1, link: "https://lds021125.oopy.io/" },
  { src: Robottok2, link: "https://lds021125.oopy.io/" },
  { src: Robottok3, link: "https://lds021125.oopy.io/" },
  { src: Robottok4, link: "https://lds021125.oopy.io/" },
  { src: Robottok5, link: "https://lds021125.oopy.io/" },
  { src: Robottok6, link: "https://lds021125.oopy.io/" },
  { src: Robottok7, link: "https://lds021125.oopy.io/" },
  { src: Robottok8, link: "https://lds021125.oopy.io/" },
  { src: Robottok9, link: "https://lds021125.oopy.io/" },
  { src: Robottok10, link: "https://lds021125.oopy.io/" },
  { src: Robottok11, link: "https://lds021125.oopy.io/" },
  { src: Robottok12, link: "https://lds021125.oopy.io/" },
  { src: Robottok13, link: "https://lds021125.oopy.io/" },
];

const Pagelist = () => {
  const handleImageClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="mb-5">
      <div className="mt-5 text-2xl mb-5">
        대여 가능한 농장 목록
      </div>
      <div className="grid grid-cols-3 gap-4">
        {RobottokImages.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagelist;