import React, { useState, useEffect } from "react";
import "../styles/style.css";
import Card from "react-bootstrap/Card";

/* For testing data from data.json  
       import data from "../data.json";
*/


import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

/* I demonstrate how you can use 2 types of styles (in the component itself and in pure CSS styles) */

const styles = {
  articles: {
    width: "100%",
    height: "100vh",
  },
  card: {
    width: "18rem",
  },
};

const Articles = () => {
  const [newsPost, setNewsPost] = useState([]);

    const newsCollectionRef = collection(db, "news");
    
    useEffect(() => {
      const getNews = async () => {
        const data = await getDocs(newsCollectionRef);
        setNewsPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      
      };

      getNews()
    }, [newsCollectionRef]);


  // Create a posts cards
  return (
    <div className="articles" style={styles.articles}>
      {newsPost ? (
        <div className="news">
          {newsPost.map((news) => (
            <div className="card" key={news.id} style={styles.card}>
              <Link to={`/news/${news.id}`} style={{ textDecoration: "none" }}>
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={news.imageUrl}
                />
                <Card.Body>
                  <div className="card-title">
                    <ul>
                      <h5 className="card-title-text">{news.title}</h5>
                    </ul>
                  </div>
                </Card.Body>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Articles;
