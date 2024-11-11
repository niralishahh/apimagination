import React, { useState, useEffect } from 'react';
import axios from "axios";
import Article from '../components/Article'; // Assuming Article is another component you're importing

const Favs = () => {
  const [articles, setFavs] = useState([]);

  const fetchFavs = async () => {
    console.log("in fetch favs");
    try {
      const res = await axios.get('http://localhost:4000/fav');
      setFavs(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFavs();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className = 'article-container'>
      {articles.map((article, index) => (
        <Article 
          key={index} 
          title={article.title} 
          author={article.author}
          description={article.description}
          url={article.url} 
          saved={true}
        />
      ))}
    </div>
  );
};

export default Favs;
