const connection = require('../database/');
const getData = require('../data/stackExchangeApiGetter');
const Answer = require('../models/answer');

class AnswerC {
  async many(site){
    const url = `https://api.stackexchange.com/2.2/answers?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`;
    const rawAnswers = await getData(url);
    let answers = [];
    for(let i = 0; i < rawAnswers.length; i++){
      const {answer_id, question_id, is_accepted} = rawAnswers[i];
      answers.push({answer_id, question_id, is_accepted});
    }
    console.log(answers);
    await Answer.insertMany(answers, (err, docs) => {
      if(err){
        console.log(err);
        return err;
      } else {
        return docs;
      }
    });
  }

  async retrieve(filter){
    return await Answer.find(filter);
  }

  async delete(filter){
    await Answer.deleteMany(filter);
  }
}

module.exports = new AnswerC();
