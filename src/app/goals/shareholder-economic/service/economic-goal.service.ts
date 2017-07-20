import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

import { EconomicGoals } from '../model/detail';

const api = environment.envApi;
@Injectable()
export class EconomicGoalService {

  constructor(private http: Http) { }

  getEconomicGoals(id: number) {
    return this.http.get(api + 'GoalService/getEconomicGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  updateEconomicGoal(goals: EconomicGoals) {
    return this.http.put(api + 'GoalService/UpdateEconomicGoals/', goals)
    .map(response => response.json(), error => console.log(error));
  }

}
