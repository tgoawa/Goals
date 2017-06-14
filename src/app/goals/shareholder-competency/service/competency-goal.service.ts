import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Goal } from '../../goal';

const api = environment.envApi;
@Injectable()
export class CompetencyGoalService {

  constructor(private http: Http) { }

  getCompetencies() {
    return this.http.get(api + 'GoalService/GetGoalCompetencies/')
    .map(response => response.json(), error => console.log(error));
  }

  getCompetencyTypes() {
    return this.http.get(api + 'GoalService/GetGoalCompetencyTypes/')
    .map(response => response.json(), error => console.log(error));
  }

  getCompetencyGoals(id: number) {
    return this.http.get(api + 'ShareholderService/GetCompetencyGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  saveCompetencyGoal(goal: Goal) {
    return this.http.post(api + 'ShareholderService/SaveCompetencyGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

  updateCompetencyGoal(goal: Goal) {
    return this.http.post(api + 'ShareholderService/UpdateCompetencyGoal/', goal)
    .map(response => response.json(), error => console.log(error));
  }

}
