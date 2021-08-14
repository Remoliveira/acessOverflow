const question = require('../data/stackExchangeApiGetter');
const Question = require('../models/question');
const connection = require('../database/');

class QuestionC {
  async many(site){
    const rawQuestions = await question(site);
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
        console.log('success on inserting ', docs.length, 'documents')
        return docs.length;
      }
    });
  }
}

module.exports= new QuestionC();
