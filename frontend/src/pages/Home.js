import React, { useState, useEffect } from 'react';
import axios from "axios";
import Article from '../components/Article'; // Assuming Article is another component you're importing
import styles from './Home.css';

const Home = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/news');
      setArticles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className = 'article-container'>
        {articles.map((article, index) => (
            <Article 
            key={index} 
            title={article.Title} 
            author={article.Author}
            description={article.Description}
            url={article.URL} 
            saved={false}
            />
        ))}
    </div>
  );
};

export default Home;
