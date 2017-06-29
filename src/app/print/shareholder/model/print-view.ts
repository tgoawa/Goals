import { SHMeeting } from '../../../meetings/shareholder/models/shmeeting';
import { Goal } from '../../../goals/goal';

export class PrintView {
    CurrentMeeting: SHMeeting;
    CompetencyGoals: Goal[];
    WIGGoals: Goal[];
    IndustryGoals: Goal[];
}
