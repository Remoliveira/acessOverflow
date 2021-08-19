import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  private answers = new Array<Answer>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAnswer(filter: number){
    let params = new HttpParams;
    params.set('filter',filter.toString())

    return this.http.get<Answer[]>("http://localhost:3333/answers", { params }).subscribe(answers => this.answers = answers);

  }

}
export class Answer{
  _id: String;
  answer_id: Number;
  question_id: Number;
  is_accepted: Boolean;
  score: Number;
  creation_date: Date;
  user_id: Number;

}