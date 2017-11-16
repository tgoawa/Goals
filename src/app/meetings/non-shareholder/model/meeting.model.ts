import { Question } from './question.model';

export class Meeting {
    DisplayDateCreated: string;
    DisplayDateModified: string;
    MeetingId: number;
    Questions: Question[];
    TeamMemberId: number;
    TeamMemberName: string;
}
