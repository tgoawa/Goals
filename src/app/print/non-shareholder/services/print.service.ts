import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class PrintService {

  constructor(private http: Http) { }

  getCurrentGoals(teamMemberId: number) {
    return this.http.get(api + 'OneToOneService/GetCurrentGoals/' + teamMemberId)
      .map(response => response.json(), error => console.log(error));
  }

  getCompetencies() {
    return this.http.get(api + 'GoalService/GetGoalCompetencies/')
      .map(response => response.json(), error => console.log(error));
  }

  getCompetencyTypes() {
    return this.http.get(api + 'GoalService/GetGoalCompetencyTypes/')
      .map(response => response.json(), error => console.log(error));
  }

  getHours(id: number) {
    return this.http.get(api + 'HoursService/GetHours/' + id)
      .map(response => response.json(), error => console.log(error));
  }

  getCategories() {
    return this.http.get(api + 'HoursService/GetCategoryItems/')
      .map(response => response.json(), error => console.log(error));
  }

}
