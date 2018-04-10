export interface SurveyLookups {
  Advisories: [
    {
      Advisory: string;
      AdvisoryId: number;
    }
  ],
  IndustryTeams: [
    {
      IndustryTeamId: number;
      TeamName: string;
    }
  ],
  ServiceLines: [
    {
      ServiceLine: string;
      ServiceLineId: number;
    }
  ],
  SubGroups: [
    {
      ServiceLineId: number;
      ServiceLineGroupId: number;
      SubGroup: string;
    }
  ]
}
