import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Goal } from '../../goal';

const api = environment.envApi;
@Injectable()
export class PersonalGoalService {

  constructor(private http: Http) { }

  getPersonalGoals(id: number) {
    return this.http.get(api + 'GoalService/GetGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  savePersonalGoal(goal: Goal) {
    return this.http.post(api + 'GoalService/SaveGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

  updatePersonalGoal(goal: Goal) {
    return this.http.post(api + 'GoalService/UpdateGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

}
