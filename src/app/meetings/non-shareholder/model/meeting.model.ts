import { Question } from '../../question.model';

export class Meeting {
    CoachId: number;
    CoachName: string;
    CoachLastFirstName: string;
    DisplayDateCreated: string;
    DisplayDateModified: string;
    MeetingId: number;
    Questions: Question[];
    TeamMemberId: number;
    TeamMemberName: string;
}
