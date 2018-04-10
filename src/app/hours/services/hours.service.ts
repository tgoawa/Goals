import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Hours } from '../models/hours';
import { environment } from '../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class HoursService {

  constructor(private http: Http) { }

  getHours(id: number) {
    return this.http.get(api + 'HoursService/GetHours/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  getCategories() {
    return this.http.get(api + 'HoursService/GetCategoryItems/')
    .map(response => response.json(), error => console.log(error));
  }

  getSurveyLookups() {
    return this.http.get(api + 'HoursService/GetSurveyLookups')
    .map(response => response.json(), error => console.log(error));
  }

  updateHours(hours: Hours) {
    return this.http.put(api + 'HoursService/updateHours/', hours)
    .map(response => response.json(), error => console.log(error));
  }
}
