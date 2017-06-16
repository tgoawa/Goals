import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { TeamMember } from './team-member';

const api = environment.envApi;
@Injectable()
export class TeamMemberService {
  teamMember: TeamMember;
  constructor(private http: Http) { }

  getTeamMember(userName: string) {
    return this.http.get(api + 'EmployeeService/GetEmployee/' + userName)
    .map(response => response.json(), error => console.log(error));
  }

}
