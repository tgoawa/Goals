import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class PersonalGoalService {

  constructor(private http: Http) { }

  getPersonalGoals(id: number) {
    this.http.get(api + 'GoalService/GetGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

}
