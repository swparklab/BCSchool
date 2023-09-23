/*

import React from "react";
import tw from "twin.macro";
import footer_logo from "../imagesfarm/footer/smartfarm_footer.png";

const Footer = () => {
    return (
        <div tw="p-24 text-center bg-gray-200">
            <img
                src={footer_logo}
                alt=""
                tw="max-w-full h-auto"
                style={{ maxHeight: "100px" }} // 이미지 높이를 조절하려면 이 부분을 조절하세요.
            />
        </div>
    );
};

export default Footer;
*/

import React, { useEffect, useState } from "react";
import footer_logo from "../imagesfarm/footer/smartfarm_footer.png";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // 화면 크기가 변경될 때마다 실행되는 이벤트 핸들러를 등록합니다.
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    // 컴포넌트가 마운트될 때 이벤트 핸들러를 등록하고, 컴포넌트가 언마운트될 때 해제합니다.
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageStyle = {
    maxHeight: isSmallScreen ? "80px" : "160px",
  };

  return (
    <div className="p-24 text-center bg-gray-200">
      <img src={footer_logo} alt="" style={imageStyle} />
    </div>
  );
};

export default Footer;
