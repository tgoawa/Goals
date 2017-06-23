import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

const api = environment.envApi;

@Injectable()
export class CoachService {

  constructor(private http: Http) { }

  getCoachEmployees(id: number) {
    return this.http.get(api + 'EmployeeService/GetCoachEmployees/' + id)
    .map(response => response.json(), error => console.log(error));
  }

}
