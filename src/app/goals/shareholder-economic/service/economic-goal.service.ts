import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

import { EconomicGoal } from '../model/detail';

const api = environment.envApi;
@Injectable()
export class EconomicGoalService {

  constructor(private http: Http) { }

  getEconomicGoals(id: number) {
    return this.http.get(api + 'ShareHolderService/getEconomicGoals/' + id)
    .map(response => response.json(), error => console.log(error));
  }

}
