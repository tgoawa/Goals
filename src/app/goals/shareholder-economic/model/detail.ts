import { TeamMember } from '../../../teamMember';

export interface Detail {
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

}

export interface EconomicGoal {
    CoachId: number;
    Details: Detail[];
    DisplayDateCreated: string;
    DisplayDateModified: string;
    EconomicGoalId: number;
    TeamMemberId: number;
    Year: number;
}

export interface EconomicGoals {
    CurrentEconomicGoal: EconomicGoal;
    PreviousEconomicGoal: EconomicGoal;
}
