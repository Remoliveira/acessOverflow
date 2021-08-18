const axios = require('axios');

const getData = async (url) =>{
  try{
    const result = await axios.get(url);

    const { quota_remaining } = result.data;

    if(quota_remaining){
      return result.data.items;
    }else{

      return false
    }
  } catch (e){
    return e;
  }
}

module.exports = getData;
