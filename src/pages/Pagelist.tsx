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
  { src: Robottok1, link: "https://www.notion.so/9c844210836248b2a8c319c75d912b09?pvs=4" },
  { src: Robottok2, link: "https://www.notion.so/9d962bf6380a437ba3f236d3dccf0017?pvs=4" },
  { src: Robottok3, link: "https://www.notion.so/d2463454ae1241a091931f5a8d444eaa?pvs=4" },
  { src: Robottok4, link: "https://www.notion.so/7f6a433b47094ab2a14b5d44921668ac?pvs=4" },
  { src: Robottok5, link: "https://www.notion.so/17c32d37fbd14358ad3839f1051ea63a?pvs=4" },
  { src: Robottok6, link: "https://www.notion.so/5b68b59478ca4ca8bb26df554f9d0b0e?pvs=4" },
  { src: Robottok7, link: "https://www.notion.so/759bdb5bb53a458d99aead24b24047f0?pvs=4" },
  { src: Robottok8, link: "https://www.notion.so/9cb69d11207d428cad513323350453df?pvs=4" },
  { src: Robottok9, link: "https://www.notion.so/d47a78a08dd7443ca7ac2fe350fffbd9?pvs=4" },
  { src: Robottok10, link: "https://www.notion.so/d47a78a08dd7443ca7ac2fe350fffbd9?pvs=4" },
  { src: Robottok11, link: "https://www.notion.so/171f7625fe444d01b15efc9aee3ec919?pvs=4" },
  { src: Robottok12, link: "https://www.notion.so/a7c72491fb4f4a0ba3772d686976e93a?pvs=4" },
  { src: Robottok13, link: "https://www.notion.so/0f0c96a809f84160a79189ea5b2e9025?pvs=4" },
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