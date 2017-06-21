import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Meeting } from '../model/meeting.model';

const api = environment.envApi;
@Injectable()
export class MeetingsService {

  constructor(private http: Http) { }

  getMeetings(id: number) {
    return this.http.get(api + 'MeetingService/GetMeetings/' + id)
    .map(response => response.json(), error => console.log(error));
  }

  saveMeeting(meeting: Meeting) {
    return this.http.post(api + 'MeetingService/CreateMeeting/', meeting)
    .map(response => response.json(), error => console.log(error));
  }

}
