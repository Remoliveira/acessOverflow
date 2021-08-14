const axios = require('axios');

const questions = async () =>{
  const {data} = await axios.get('https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default');
  console.log(data.items);
};

module.exports = questions;
