import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/*For testing data from data.json
  import data from "../data.json";
  import ErrorPage from "./ErrorPage";
  */
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore/lite";

const Content = () => {
  const [news, setNews] = useState(null);
  const { newsId } = useParams();
  
  // const news = data.find((news) => news.id.toString() === newsId);

  useEffect(() => {
    const fetchNews = async () => {
      const newsDocRef = doc(db, "news", newsId);
      const newsDocSnepshot = await getDoc(newsDocRef);

      if (newsDocSnepshot.exists()) {
        setNews(newsDocSnepshot.data());
      } else {
        setNews(null);
      }
    };

    fetchNews();
  }, [newsId]);

  return (
    <div className="content">
      {news ? (
        <div className="content-container">
          <div className="content-elements">
            <div className="content-title">
              <b>{news.title}</b>
            </div>
            <div className="content-image">
              <img src={news.imageUrl} alt="mainImg" />
            </div>
            <div className="content-text">{news.description}</div>
            <div className="expert-comment">
              <h2 style={{ color: "blue" }}>Experts Comment</h2>
              <br />
              {news.expertComment}
            </div>
          </div>
        </div>
      ) : (
        // <div>
        //   <ErrorPage />
        // </div>
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Content;
