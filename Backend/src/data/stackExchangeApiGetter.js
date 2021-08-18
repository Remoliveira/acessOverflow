const axios = require('axios');

const getData = async (url) =>{
  try{
    const { data } = await axios.get(url);
    const { quota_remaining } = data;
    
    if(quota_remaining){
      return data.items;
    }else{

      return false
    }
  } catch (e){
    return e;
  }
}

module.exports = getData;
