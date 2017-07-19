import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Goal } from '../../goal';

const api = environment.envApi;

@Injectable()
export class WigGoalServiceService {

  constructor(private http: Http) { }

  getWIGs() {
    return this.http.get(api + 'GoalService/GetGoalWIGs/')
    .map(response => response.json(), error => console.log(error));
  }

  getWigGoals(id: number) {
    return this.http.get(api + 'GoalService/GetWigGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  saveWigGoal(goal: Goal) {
    return this.http.post(api + 'GoalService/SaveWigGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

  updateWigGoal(goal: Goal) {
    return this.http.post(api + 'GoalService/UpdateWigGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }
}
