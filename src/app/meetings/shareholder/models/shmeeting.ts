import { TeamMember } from '../../../teamMember';

export class SHMeeting {
    CoachId: number;
    Details: Detail[];
    DisplayDateCreated: string;
    DisplayDateModified: string;
    Notes: Note[];
    ShareHolderCoach: TeamMember;
    ShareHolderMeetingId: number;
    Supports: Support[];
    TeamMemberId: number;
    Weight: number;

    constructor(teamMemberId) {
        this.CoachId = 0;
        this.Details = [];
        this.Notes = [];
        this.ShareHolderMeetingId = 0;
        this.Supports = [];
        this.TeamMemberId = teamMemberId;
    }
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
    sDaysinWIP_AR: number;
    sRealization: number;

    constructor(detailTypeId) {
        this.BillingsTier6 = 0;
        this.BillingsTier6GR = 0;
        this.BillingsTier6PBR = 0;
        this.BillingsTiers1_3 = 0;
        this.BillingsTiers4_5 = 0;
        this.BillingsTransferredFromOthers = 0;
        this.BillingsTransferredToOthers = 0;
        this.BusinessExistingClients = 0;
        this.BusinessNewClients = 0;
        this.ChargeHours = 0;
        this.DaysinWIP_AR = 0;
        this.DisplayDateCreated = '';
        this.DisplayDateModified = '';
        this.LostClients = 0;
        this.Realization = 0;
        this.ReferralsSpecialityUnits = 0;
        this.ShareHolderDetailTypeId = detailTypeId;
        this.ShareHolderMeetingDetailId = 0;
        this.ShareHolderMeetingId = 0;
        this.sDaysinWIP_AR = 0;
        this.sRealization = 0;
    }
}

export class Note {
    DisplayDateCreated: string;
    DisplayDateDue: any;
    DisplayDateModified: string;
    Note: string;
    ShareHolderMeetingId: number;
    ShareHolderMeetingNoteId: number;
}

export class Support {
    DisplayDateCreated: string;
    DisplayDateDue: any;
    DisplayDateModified: string;
    ShareHolderMeetingId: number;
    ShareHolderMeetingSupportId: number;
    Support: string;
}
