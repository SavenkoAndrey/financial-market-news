import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import ErrorPage from "./ErrorPage";

const Content = () => {
  const { newsId } = useParams();
  const news = data.find((news) => news.id.toString() === newsId);

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
              <h2 style={{color: 'blue'}}>Experts Comment</h2><br />
              {news.expertComment}</div>
          </div>
        </div>
      ) : (
        <div>
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default Content;
