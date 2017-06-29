import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

const api = environment.envApi;

@Injectable()
export class ShareholderPrintService {

  constructor(private http: Http) { }

  getPrintView(teamMemberid: number) {
    return this.http.get(api + 'ShareHolderService/GetShareHolderPrint/' + teamMemberid)
      .map(response => response.json(), error => console.log(error));
  }

  getWIGs() {
    return this.http.get(api + 'GoalService/GetGoalWIGs/')
      .map(response => response.json(), error => console.log(error));
  }
}
