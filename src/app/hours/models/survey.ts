export class Survey {
  LearningAdvisories: number[];
  OpportunityAdvisories: number[];
  IndustryTeamLearn: number[];
  IndustryTeamsTime: number[];
  IsExpertise: boolean;
  ServiceLineAlignedId: number;
  SubGroupsExpertise: number[];
  TeamMemberId: number;

  constructor() {
    this.LearningAdvisories = [0];
    this.OpportunityAdvisories = [0];
    this.IndustryTeamLearn = [0];
    this.IndustryTeamsTime = [0];
    this.ServiceLineAlignedId = 0;
    this.SubGroupsExpertise = [0];
  }
}
