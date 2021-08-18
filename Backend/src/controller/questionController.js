const getData = require('../data/stackExchangeApiGetter');
const Question = require('../models/question');
const Answer = require("../models/answer");
const User = require("../models/user");

class QuestionC {

<<<<<<< HEAD:Backend/src/controller/questionController.js
  constructor(){

    this.answeredQuestions = [];
    this.users = []
  }

  async many(site){
    const url = `https://api.stackexchange.com/2.2/questions?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default&fromdate=1609459200`
=======
  async many(site, date){
    const url = `https://api.stackexchange.com/2.2/questions?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default&fromdate=${date.from}&todate=${date.to}`
>>>>>>> 2986ef54245cde51a963f5003207649c1415ba25:src/controller/questionController.js
    try{
      const rawQuestions = await getData(url);
      if(rawQuestions.isAxiosError){
        console.log('error questions')
        return;
      }
      let questions = [];
      let answeredQuestions = [];
      let users = [];

      for(let i = 0; i < rawQuestions.length; i++){
        let {question_id,
          title,
          answer_count,
          is_answered,
          view_count,
          tags,
          creation_date,
          owner,
          link,
          score
        } = rawQuestions[i];
        const { user_id } = owner;
          questions.push({question_id,
            title,
            answer_count,
            is_answered,
            view_count,
            tags,
            creation_date,
            user_id,
            link,
            site,
            score
          });

          answeredQuestions.push(question_id);

        users.push(owner.user_id)

      }

      await this.delay(5000);

      await this.getAnswers(site, answeredQuestions, users, date);

      // await Question.insertMany(questions, (err, docs) =>{
      //   if(err) {
      //     return err;
      //   } else {
      //     // console.log(docs)
      //     return docs.length;
      //   }
      // });

    } catch(e){
      cosole.log(e);
      return e;
    }

  }

  async getAnswers(site, questions, users, date){

      const urlAnswers = `https://api.stackexchange.com/2.3/questions/${questions.join(';')}/answers?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default&fromdate=${date.from}&todate=${date.to}`
      try{

        let answers = []

        const rawAnswers = await getData(urlAnswers);
        if(rawAnswers.isAxiosError){
          console.log('error answers')
          return;
        }
        for(let answer of rawAnswers){

          let { answer_id, question_id, is_accepted, score, creation_date, owner } = answer;

          const { user_id } = owner;

          answers.push({ answer_id, question_id, is_accepted, score, creation_date, user_id });

          users.push(owner.user_id)
        }
        // console.log(answers)


        // await Answer.insertMany(answers, (err, docs) =>{
        //   if(err) {
        //     return err;
        //   } else {
        //     // console.log(docs)
        //     return docs.length;
        //   }
        // });

      }catch(err){
        console.log(err)
      }
      await this.delay(5000);
      await this.getUsers(site, users, date)
  }

  async getUsers(site, users, date){

    let fullUsers = [];

      // console.log(id)
        const urlUsers = `https://api.stackexchange.com/2.3/users/${users.join(';')}?key=xwgkMlxkdZODgnbso7g77Q((&order=desc&sort=reputation&site=${site}&fromdate=${date.from}&todate=${date.to}`

        try{


          const rawUsers = await getData(urlUsers)
            if(rawUsers.isAxiosError){
              console.log('error users')
              return;
            }
            // console.log(rawUsers)
            for(const single of rawUsers){
            let { user_id, is_employee, reputation, accept_rate, badge_counts, type, display_name, link } = single;
            fullUsers.push({ user_id, is_employee, reputation, accept_rate, badge_counts, type, display_name, link })
          }
          // console.log('user:', user_id)

        }catch(err){
          console.log(err)
        }
          await User.insertMany(fullUsers, (err, docs) =>{
            if(err) {
              return err;
            } else {
              // console.log(docs)
              return docs.length;
            }
          });

        await this.delay(5000);



<<<<<<< HEAD:Backend/src/controller/questionController.js
    // await User.insertMany(fullUsers, (err, docs) =>{
    //   if(err) {
    //     return err;
    //   } else {
    //     // console.log(docs)
    //     return docs.length;
    //   }
    // });
    console.log("finish")
=======
>>>>>>> 2986ef54245cde51a963f5003207649c1415ba25:src/controller/questionController.js
    // console.log(fullUsers)
  }

  async getAcceptAnswer(){

  }

  //pegar resposta aceita e usuarios

  async retrieve(filter){
    return await Question.find(filter);
  }

  async delete(filter){
    await Question.deleteMany(filter);
  }

  delay(n) {
   n = n || 2000;
   return new Promise(done => {
     setTimeout(() => {
       done();
     }, n);
   });
 }

}



module.exports= new QuestionC();
