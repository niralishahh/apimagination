import React, { useState } from 'react';
import axios from "axios";
import styles from './Article.css';

const Article = ({title, author, description, url, saved }) => {

    const [isSaved, setIsSaved] = useState(saved);
    
    const postFavs = async (title, author, description, url) => {
        console.log("Data to save:", { title, author, description, url });
        try {
          const res = await axios.post('http://localhost:4000/favs', {title, author, description, url});
          console.log('Article Saved', res)
          setIsSaved(true);
        } catch (err) {
          console.log(err);
        }
      };



    return (
        <div className="card">
            <h3>Title: {title}</h3>
            <h5>Author: {author} </h5>
            <h5>Description: {description}</h5>
            <h6>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            </h6>
            <div className="button-container">
                <button onClick={() => postFavs(title, author, description, url)} disabled={isSaved}>
                {isSaved ? "Saved!" : "Save Article"}</button>
            </div>
        </div>
    );
};



export default Article;