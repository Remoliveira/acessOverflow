const getData = require('../data/stackExchangeApiGetter');
const User = require("../models/user")


class UserController{

    async many(site){
        // colocar a key
        const url = `https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=${site}`

        try{
            const rawUsers = await getData(url);
            
            let users = []
            for (let singleUser in rawUsers){
              
                const { user_id, is_employee, reputation, accept_rate, badge_counts, type, display_name, link } = rawUsers[singleUser];
                users.push({ user_id, is_employee, reputation, accept_rate, badge_counts, type, display_name, link });
                
            }
           
            await User.insertMany(users ,(err, docs) =>{
                if(err) {
                  return err;
                } else {
                //   console.log(docs)
                  return docs.length;
                }
              }); 
      
       }catch(err){
           console.log(err)
       }

       
    }
}

module.exports = UserController;