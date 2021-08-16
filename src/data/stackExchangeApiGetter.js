const axios = require('axios');

const getData = async (url) =>{
  try{
    const { data } = await axios.get(url);
    // console.log(typeof(data.items))
    return data.items;
  } catch (e){
    return e;
  }
}

module.exports = getData;
