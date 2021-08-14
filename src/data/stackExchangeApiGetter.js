const axios = require('axios');

const questions = async (site) =>{
  const {data} = await axios.get(`https://api.stackexchange.com/2.2/questions?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`);
  return data.items;
}

module.exports = questions;
