const getData = require('../data/stackExchangeApiGetter');
const Question = require('../models/question');
const Answer = require("../models/answer")


class QuestionC {
  
  constructor(){

    this.answeredQuestions = []; 
  }
  
  async many(site){
    const url = `https://api.stackexchange.com/2.2/questions?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`
    try{
      const rawQuestions = await getData(url);
      let questions = [];
      let answers = [];
      for(let i = 0; i < rawQuestions.length; i++){
        let {question_id,
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
            creation_date,
            answers,
          });
        if( is_answered == true){
          this.answeredQuestions.push(question_id)
        }
        //   const id = question_id;
        //   console.log("id:"+ id)
        //   // const urlAnswers = `https://api.stackexchange.com/2.3/questions/${id}/answers?key=xwgkMlxkdZODgnbso7g77Q&order=desc&sort=activity&site=${site}`
        //   const urlAnswers = `https://api.stackexchange.com/2.3/questions/${id}/answers?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`

        //   try{

        //     const rawAnswers = await getData(urlAnswers);
        //     console.log(rawAnswers.lenght)

        //     // for(let j = 0; j < rawAnswers.length; j++){
        //     //   console.log("here")
        //     //   let {answer_id, question_id, is_accepted, score, creation_date, owner} = rawAnswers[j];
        //     //   // answers.push({answer_id, is_accepted, question_id, score, creation_date, owner});
        //     //   questions[i].answers.push({ answer_id, question_id, is_accepted, score, creation_date, owner }) ;
        //     //   // console.log(question_id[i].answers)
              
        //     // }

        //     for(let pos in rawAnswers ){
        //       console.log("here")
        //         let {answer_id, question_id, is_accepted, score, creation_date, owner} = rawAnswers[pos];
        //         // answers.push({answer_id, is_accepted, question_id, score, creation_date, owner});
        //         questions[i].answers.push({ answer_id, question_id, is_accepted, score, creation_date, owner }) ;
        //         // console.log(question_id[i].answers)
        //     }
           
        //     // questions.answers = answers;
        //     console.log(questions[i].answers)
        //     // console.log(questions[i])

        //   }catch(e){
        //     console.log(e)
        //   }
        // }else{
        //   questions[i].answers = []
        // }
      }
      
      this.getAnswers(site)


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

  async getAnswers(site){
    
    for(let single of this.answeredQuestions){
      
      const urlAnswers = `https://api.stackexchange.com/2.3/questions/${single}/answers?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`
      console.log(single)

      try{
        
        let answers = []

        const rawAnswers = await getData(urlAnswers);
        for(let answer of rawAnswers){
          let { answer_id, question_id, is_accepted, score, creation_date, owner } = answer;
          answers.push({ answer_id, question_id, is_accepted, score, creation_date, owner });
        }
        // console.log(answers)

        
        await Answer.insertMany(answers, (err, docs) =>{
          if(err) {
            return err;
          } else {
            console.log(docs)
            return docs.length;
          }
        });
        

      }catch(err){
        console.log(err)
      }
    }

    
  }

  
}

module.exports= new QuestionC();
