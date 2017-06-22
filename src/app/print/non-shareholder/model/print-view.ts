import { Meeting } from '../../../meetings/non-shareholder/model/meeting.model';
import { Goal } from '../../../goals/goal';
import { TeamMember} from '../../../teamMember';
import { Question } from '../../../meetings/non-shareholder/model/question.model';

export class PrintView {
CurrentMeeting: Meeting;
OpenIndustryTeamGoals: Goal[];
OpenPersonalGoals: Goal[];
TeamMember: TeamMember;
Questions: Question[];
}
