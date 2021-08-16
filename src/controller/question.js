const getData = require('../data/stackExchangeApiGetter');
const Question = require('../models/question');
const connection = require('../database/');

class QuestionC {
  async many(site){
    const url = `https://api.stackexchange.com/2.2/questions?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`
    try{
      const rawQuestions = await getData(url);
      let questions = [];
      for(let i = 0; i < rawQuestions.length; i++){
        const {question_id,
          title,
          answer_count,
          is_answered,
          view_count,
          tags} = rawQuestions[i];
        questions.push({question_id,
          title,
          answer_count,
          is_answered,
          view_count,
          tags});
      }

      await Question.insertMany(questions, (err, docs) =>{
        if(err) {
          return err;
        } else {
          console.log(docs)
          return docs.length;
        }
      });
    } catch(e){
      cosole.log(e);
      return e;
    }

  }
}

module.exports= new QuestionC();
