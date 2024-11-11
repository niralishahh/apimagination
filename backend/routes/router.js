const express = require('express');
const router = express.Router();
const axios = require("axios");
const { append } = require('express/lib/response');
const { getFavs, getFav, createFav } = require('../database');
require('dotenv').config();

const key = process.env.API_KEY;


router.get('/fav', async (req, res) => {
    const favs = await getFavs()
    res.send(favs)
});

const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

router.post('/favs', (req, res) => {
    const { title, author, description, url } = req.body;
    // Save the article in your database here, using your database functions
    createFav(title, author, description, url)
    res.json({ message: "Article saved successfully!" });
});


router.get('/news', async (req, res) => {
    console.log('in function');
    try {
        const response = await axios.get(url);
        articles = response.data.articles;
    
        const art = articles.map(article => ({
                'Title': article.title, 
                'Author': article.author,
                'Description': article.description,
                'URL': article.url,
        })); 
        // console.log(articles)
        console.log(art)
        res.json(art);
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({error: 'Failed to fetch news'});
    }
});


module.exports = router;



/*
app.get('/', async (req, res) => {

}); */

/*
axios.get(url)
  .then(response => {
    if (response.status === 200) {
      const articles = response.data.articles;
      articles.forEach(article => {
        console.log(`Title: ${article.title}`);
        console.log(`Description: ${article.description}`);
        console.log(`URL: ${article.url}\n`);
      });
    } else {
      console.log('Failed to retrieve articles:', response.status);
    }
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });
*/
