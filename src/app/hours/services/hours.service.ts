import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class HoursService {

  constructor(private http: Http) { }

  getHours(id: number) {
    return this.http.get(api + 'HoursService/GetHours/' + id)
    .map(response => response.json(), error => console.log(error));
  }
}
