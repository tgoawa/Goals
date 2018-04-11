export interface SurveyLookups {
  Advisories: AdvisoryInterface[],
  IndustryTeams: IndustryTeamsInterface[],
  ServiceLines: ServiceLinesInterface[],
  SubGroups: SubGroupsInterface[]
}

export interface AdvisoryInterface {
  Advisory: string;
  AdvisoryId: number;
}

export interface IndustryTeamsInterface {
  IndustryTeamId: number;
  TeamName: string;
}

export interface ServiceLinesInterface {
  ServiceLine: string;
  ServiceLineId: number;
}

export interface SubGroupsInterface {
  ServiceLineId: number;
  ServiceLineSubGroupId: number;
  SubGroup: string;
}

export class SubGroupsSurveyData implements SubGroupsInterface {
  ServiceLineId: number;
  ServiceLineSubGroupId: number;
  SubGroup: string;
  IsSelected: boolean;

  constructor(serviceLineId: number, serviceLineGroupId: number, subGroup: string) {
    this.ServiceLineId = serviceLineId;
    this.ServiceLineSubGroupId = serviceLineGroupId;
    this.SubGroup = subGroup;
    this.IsSelected = false;
  }
}
