const connection = require('../databas/');
const getData = require('../data/stackExchangeApiGetter');
const Answer = require('../models/answer');

class AnswerC {
  async many(site){
    const url = `https://api.stackexchange.com/2.3/answers?key=xwgkMlxkdZODgnbso7g77Q((&site=${site}&order=desc&sort=activity&filter=default`;
    const rawAnswers = getData(url);
    //WIP ...
  }
}
