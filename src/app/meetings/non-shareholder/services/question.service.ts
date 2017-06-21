import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Question } from '../model/question.model';

const api = environment.envApi;
@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getQuestions(meetingId: number) {
    return this.http.get(api + 'QuestionService/GetQuestions/' + meetingId)
    .map(response => response.json(), error => console.log(error));
  }
}
