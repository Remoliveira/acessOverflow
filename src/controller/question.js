const getData = require('../data/stackExchangeApiGetter');
const Question = require('../models/question');
const Answer = require("../models/answer");
const User = require("../models/user");

class QuestionC {

  constructor(){

    this.answeredQuestions = [];
    this.users = []
  }

  async many(site){
    const url = `https://api.stackexchange.com/2.2/questions?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`
    try{
      const rawQuestions = await getData(url);
      let questions = [];

      for(let i = 0; i < rawQuestions.length; i++){
        let {question_id,
          title,
          answer_count,
          is_answered,
          view_count,
          tags,
          creation_date,
          owner
        } = rawQuestions[i];
          questions.push({question_id,
            title,
            answer_count,
            is_answered,
            view_count,
            tags,
            creation_date,
            owner
          });
        if( is_answered == true){
          this.answeredQuestions.push(question_id)
        }
        // console.log(owner.user_id)
        this.users.push(owner.user_id)

      }
      setTimeout(() => {
        // console.log("-------------") 
      }, 5000);
      this.getAnswers(site)


      await Question.insertMany(questions, (err, docs) =>{
        if(err) {
          return err;
        } else {
          // console.log(docs)
          return docs.length;
        }
      });

    } catch(e){
      cosole.log(e);
      return e;
    }
  }

  async getAnswers(site){

    for(let single of this.answeredQuestions){

      const urlAnswers = `https://api.stackexchange.com/2.3/questions/${single}/answers?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`
      // console.log(single)

      try{

        let answers = []

        const rawAnswers = await getData(urlAnswers);
        for(let answer of rawAnswers){

          let { answer_id, question_id, is_accepted, score, creation_date, owner } = answer;

          answers.push({ answer_id, question_id, is_accepted, score, creation_date, owner });

          this.users.push(owner.user_id)
        }
        // console.log(answers)


        await Answer.insertMany(answers, (err, docs) =>{
          if(err) {
            return err;
          } else {
            // console.log(docs)
            return docs.length;
          }
        });


      }catch(err){
        console.log(err)
      }
    }
    setTimeout(() => {
      // console.log("-------------")  
    }, 5000);
    this.getUsers(site)
  }

  async getUsers(site){

    let fullUsers = [];

    for(let id of this.users){
      console.log(id)
      const urlUsers = `https://api.stackexchange.com/2.3/users/${id}?key=xwgkMlxkdZODgnbso7g77Q((&order=desc&sort=reputation&site=${site}`

      try{

        
        const rawUsers = await getData(urlUsers)

        console.log(rawUsers)

        let { user_id, is_employee, reputation, accept_rate, badge_counts, type, display_name, link } = rawUsers[0];
        fullUsers.push({ user_id, is_employee, reputation, accept_rate, badge_counts, type, display_name, link })

        // console.log(user_id)

      }catch(err){
        console.log(err)
      }

    }

    await User.insertMany(fullUsers, (err, docs) =>{
      if(err) {
        return err;
      } else {
        // console.log(docs)
        return docs.length;
      }
    });
    // console.log("here")
    // console.log(fullUsers)
  }

  async getAcceptAnswer(){

  }

  //pegar resposta aceita e usuarios

  async retrieve(filter){
    return await Question.find(filter);
  }

}

module.exports= new QuestionC();
