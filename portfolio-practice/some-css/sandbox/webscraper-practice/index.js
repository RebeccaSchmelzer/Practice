const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://builtin.com/women-tech';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    
    const links = [];
    
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      if (href && href.startsWith('https://')) {
        links.push(href);
      }
    });
    
    console.log(links);
  })
  .catch(error => {
    console.log(error);
  });
