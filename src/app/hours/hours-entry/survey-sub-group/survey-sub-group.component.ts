import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ServiceLinesInterface, SubGroupsSurveyData } from '../../models/surveyLookups';
import { Survey } from '../../models/survey';

@Component({
  selector: 'app-survey-sub-group',
  templateUrl: './survey-sub-group.component.html',
  styleUrls: ['./survey-sub-group.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SurveySubGroupComponent implements OnInit {
@Input() serviceLine: ServiceLinesInterface;
@Input() subgroupsList: SubGroupsSurveyData;
isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
