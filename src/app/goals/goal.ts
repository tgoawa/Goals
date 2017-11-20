export class Action {
  ActionId: number;
  GoalId: number;
  Action: string;
  IsCompleted: boolean;
  DisplayDateCreated: string;
  DisplayDateModified: string;
  DisplayDateDue: any;
  IsDirty: boolean;

  constructor() {
    this.ActionId = 0;
    this.GoalId = 0;
    this.Action = '';
    this.IsCompleted = false;
    this.DisplayDateCreated = '';
    this.DisplayDateModified = '';
    this.DisplayDateDue = '';
    this.IsDirty = false;
  }
};

export class Measurement {
  MeasurementId: number;
  GoalId: number;
  Measurement: string;
  DisplayDateCreated: string;
  DisplayDateModified: string;
  IsDirty: boolean;

  constructor() {
    this.MeasurementId = 0;
    this.GoalId  = 0;
    this.Measurement = '';
    this.DisplayDateCreated = '';
    this.DisplayDateModified = '';
    this.IsDirty = false;
  }
}

export class Support {
  SupportId: number;
  GoalId: number;
  Support: string;
  DisplayDateCreated: string;
  DisplayDateModified: string;
  IsDirty: boolean;

  constructor() {
    this.SupportId = 0;
    this.GoalId = 0;
    this.Support = '';
    this.DisplayDateCreated = '';
    this.DisplayDateModified = '';
    this.IsDirty = false;
  }
}

export class Note {
  NoteId: number;
  GoalId: number;
  Note: string;
  DisplayDateCreated: string;
  DisplayDateModified: string;
  IsDirty: boolean;
}

export class Goal {
    GoalId: number;
    GoalTypeId: number;
    GoalWIGId: number;
    GoalCompetencyId: number;
    GoalCompetencyTypeId: number;
    GoalCompletionPercentage: number;
    GoalDescription: string;
    IndustryTeams: string[];
    IndustryTeamId: number;
    IsCompleted: boolean;
    Name: string;
    TeamMemberId: number;
    Weight: number;
    DisplayDateCreated: string;
    DisplayDateModified: string;
    DisplayDateCompleted: string;
    Actions: Action[];
    Supports: Support[];
    Measurements: Measurement[];
    Notes: Note[];

    constructor(goalTypeId: number, teamMemberId: number, teamMemberIndustryTeams: string[]) {
      this.GoalId = 0;
      this.GoalTypeId = goalTypeId;
      this.GoalWIGId = 0;
      this.GoalCompetencyTypeId = 0;
      this.GoalCompetencyId = 0;
      this.GoalCompletionPercentage = 0;
      this.GoalDescription = '';
      this.IndustryTeamId = 0;
      this.IndustryTeams = teamMemberIndustryTeams;
      this.IsCompleted = false;
      this.Name = '';
      this.TeamMemberId = teamMemberId;
      this.Weight = 0;
      this.DisplayDateCreated = '';
      this.DisplayDateModified = '';
      this.DisplayDateCompleted = '';
      this.Actions = [new Action()];
      this.Measurements = [new Measurement()];
      this.Supports = [new Support()];
      this.Notes = [];
    }
};

export class IndustryTeam {
    IndustryTeamId: number;
    TeamName: string;
}
