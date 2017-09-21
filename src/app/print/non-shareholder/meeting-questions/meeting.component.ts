import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../meetings/non-shareholder/model/question.model';
import { TeamMember } from '../../../teamMember';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  @Input('questions') questions: Question[];
  @Input('teamMember') teamMember: TeamMember;
  constructor() { }

  ngOnInit() {
    this.parseQuestionsArray();
  }

  parseQuestionsArray() {
    for (let x = 0; x < this.questions.length; x++) {
      if (this.questions[x].AnswerText !== null) {
        this.questions[x].AnswerText = this.questions[x].AnswerText.replace(/(\r\n|\n|\r)/gm, '<br>');
      } else {
        this.questions[x].AnswerText = '';
      }
    }
  }

}
