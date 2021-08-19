import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Questions{

  tags:[];
  _id: String;
  question_id: Number;
  title: String;
  answer_count: Number;
  is_answered: Boolean;
  view_count: Number;
  creation_date: Date;
  user_id: Number;
  link: String;
  site: String;
  score: Number;

}
