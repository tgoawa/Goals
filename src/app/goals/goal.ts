export class Goal {
    GoalId: number;
    GoalTypeId: number;
    GoalWIGId: number;
    GoalCompetencyId: number;
    GoalCompetencyTypeId: number;
    GoalCompletionPercentage: number;
    GoalDescription: string;
    IndustryTeamId: number;
    IsCompleted: boolean;
    Name: string;
    TeamMemberId: number;
    Weight: number;
    DisplayDateCreated: string;
    DisplayDateModified: string;
    Actions: Action[];
    Supports: Support[];
    Measurements: Measurement[];
    Notes: Note[];
};

export class Action {
    ActionId: number;
    GoalId: number;
    Action: string;
    IsCompleted: boolean;
    DisplayDateCreated: string;
    DisplayDateModified: string;
};

export class Measurement {
    MeasurementId: number;
    GoalId: number;
    Measurement: string;
    DisplayDateCreated: string;
    DisplayDateModified: string;
}

export class Support {
    SupportId: number;
    GoalId: number;
    Support: string;
    DisplayDateCreated: string;
    DisplayDateModified: string;
}

export class Note {
    NoteId: number;
    GoalId: number;
    Note: string;
    DisplayDateCreated: string;
    DisplayDateModified: string;
}