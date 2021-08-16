const getData = require('../data/stackExchangeApiGetter');
const Question = require('../models/question');
const connection = require('../database/');
const { get } = require('../routes/questions.routes');

class QuestionC {
  
  constructor(){

    this.answeredQuestions = []; 
  }
  
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
          tags,
          creation_date
        } = rawQuestions[i];
        questions.push({question_id,
          title,
          answer_count,
          is_answered,
          view_count,
          tags,
          creation_date
        });

        if( is_answered == true){
          const id = this.answeredQuestions[i];

          const url = `/2.3/questions/${id}/answers?order=desc&sort=activity&site=${site}`

          try{

            const rawAnswers = await getData(url);
            let answers = [];

            for(let i = 0; i < rawAnswers.length; i++){
              const {answer_id, question_id, is_accepted} = rawAnswers[i];
              answers.push({answer_id, is_accepted});
            }
            console.log(answers);

            return answers;
          

          }catch{

          }
        }
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

  async getAnswers(site, questions){

    for(let i in this.answeredQuestions){

      
    }
  }

  
}

module.exports= new QuestionC();
