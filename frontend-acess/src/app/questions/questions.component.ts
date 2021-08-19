import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  private questions = new Array<Questions>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getQuestionsFiltered(filter: string, orderBy: string, limit: number){
    let params = new HttpParams;
    
    params.set('filter',filter)
    params.set('orderBy',orderBy)
    params.set('limit',limit.toString())

    return this.http.get<Questions[]>("http://localhost:3333/questions/sorted",{ params }).subscribe(questions => this.questions = questions)
  }
  

  getTags(limit: number, site: string){

    let params = new HttpParams;
    params.set('limit',limit.toString())
    params.set('site',site)

    return this.http.get<Questions[]>("http://localhost:3333/questions/agree", { params }).subscribe(questions => this.questions = questions)
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
