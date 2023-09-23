import React from "react";
import Study1 from "../imagesfarm/Study/study1.png"; // 이미지 파일 이름 수정
import Study2 from "../imagesfarm/Study/study2.png"; // 이미지 파일 이름 수정

const StudyImages = [
  { src: Study1, link: "https://www.nongsaro.go.kr/portal/search/nongsaroSearch.ps?menuId=PS00007&categoryName=SCH01&sortOrdr=01&pageIndex=1&pageSize=10&pageUnit=10&includeWord=&exEqWord=&ikEqWork=&excludeWord=&Hflag=&qura=&reCountingYn=Y&field=SCH01&searchWord=%EB%8F%84%EC%8B%9C%EB%86%8D%EC%97%85" },
  { src: Study2, link: "https://www.nongsaro.go.kr/portal/search/nongsaroSearch.ps?categoryName=SCH01&menuId=PS00007&option=0&sortOrdr=01&searchWord=%EC%B9%98%EC%9C%A0%EB%86%8D%EC%97%85" },
  // 나머지 이미지 정보도 필요에 따라 수정
];

const Study = () => {
  const handleImageClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="mb-5">
      <div className="mt-5 text-2xl mb-5">
        도시농업플렛폼 무료 특화교육
        </div>
      <div className="grid grid-cols-1 gap-4 border-2">
        {StudyImages.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Study;