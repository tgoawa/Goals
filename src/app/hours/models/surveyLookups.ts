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
  ServiceLineGroupId: number;
  SubGroup: string;
}
