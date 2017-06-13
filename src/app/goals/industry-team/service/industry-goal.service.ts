import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Goal } from '../../goal';

const api = environment.envApi;
@Injectable()
export class IndustryGoalService {

  constructor(private http: Http) { }

  getIndustryGoals(id: number) {
    return this.http.get(api + 'GoalService/GetIndustryGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  saveIndustryGoal(goal: Goal) {
    return this.http.post(api + 'GoalService/SaveIndustryGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

  updateIndustryGoal(goal: Goal) {
    return this.http.post(api + 'GoalService/UpdateIndustryGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

}
