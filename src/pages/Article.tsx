
import React from "react";
import Article1 from "../imagesfarm//Article/article1.png";
import Article2 from "../imagesfarm//Article/article2.png";
import Article3 from "../imagesfarm//Article/article3.png";
import Article4 from "../imagesfarm//Article/article4.png";

const ArticleImages = [
  { src: Article1, link: "https://www.newspim.com/news/view/20230914000276" },
  { src: Article2, link: "https://news.tf.co.kr/read/photomovie/2038366.htm" },
  { src: Article3, link: "http://www.yeominnews.com/news/articleView.html?idxno=5286" },
  { src: Article4, link: "https://www.lecturernews.com/news/articleView.html?idxno=130453" },
];

const Article = () => {
  const handleImageClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="mb-5">
      <div className="mt-5 text-2xl mb-5">
        최신 도시농업플렛폼 기사 목록
      </div>
      <div className="grid grid-cols-2 gap-4">
        {ArticleImages.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;