import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { SHMeeting } from '../models/shmeeting';


const api = environment.envApi;
@Injectable()
export class ShareholderMeetingService {

  constructor(private http: Http) { }

  getMeetings(id: number) {
    return this.http.get(api + 'ShareHolderService/getShareholderMeetings/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  saveMeeting(meeting: SHMeeting) {
    return this.http.post(api + 'ShareHolderService/CreateShareHolderMeeting/', meeting)
    .map(response => response.json(), error => console.log(error));
  }
}
