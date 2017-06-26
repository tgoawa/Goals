import { TeamMember } from '../../../teamMember';

export class SHMeeting {
    CoachId: number;
    Details: Detail;
    DisplayDateCreated: string;
    DisplayDateModified: string;
    Notes: Note[];
    ShareHolderCoach: TeamMember;
    ShareHolderMeetingId: number;
    Supports: Support[];
    TeamMemberId: number;
    Weight: number;
}

export class Detail {
    BillingsTier6: number;
    BillingsTier6GR: number;
    BillingsTier6PBR: number;
    BillingsTiers1_3: number;
    BillingsTiers4_5: number;
    BillingsTransferredFromOthers: number;
    BillingsTransferredToOthers: number;
    BusinessExistingClients: number;
    BusinessNewClients: number;
    ChargeHours: number;
    DaysinWIP_AR: number;
    DisplayDateCreated: string;
    DisplayDateModified: string;
    LostClients: number;
    Realization: number;
    ReferralsSpecialityUnits: number;
    ShareHolderDetailTypeId: number;
    ShareHolderMeetingDetailId: number;
    ShareHolderMeetingId: number;
    sDaysinWIP_AR: string;
    sRealization: string;
}

export class Note {
    DisplayDateCreated: string;
    DisplayDateDue: string;
    DisplayDateModified: string;
    Note: string;
    ShareHolderMeetingId: number;
    ShareHolderMeetingNoteId: number;
}

export class Support {
    DisplayDateCreated: string;
    DisplayDateDue: string;
    DisplayDateModified: string;
    ShareHolderMeetingId: number;
    ShareHolderMeetingSupportId: number;
    Support: string;
}
