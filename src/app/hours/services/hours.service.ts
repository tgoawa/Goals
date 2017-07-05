import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class HoursService {

  constructor(private http: Http) { }

  getHoursList() {

  }
}
