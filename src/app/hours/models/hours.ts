export interface Hours {
    ActualFiscalYear: number;
    EstimatedFiscalYear: number;
    IndustryTeams: Item[];
    NonChargeList: Item[];
    ServiceLines: Item[];
    TeamMemberId: number;
}

export interface Item {
    ItemId: number;
    CategoryId: number;
    CurrentYearHours: number;
    PriorYearHours: number;
    EstimatedHours: number;
    SuggestedHours: string;
    IsDirty: boolean;
}

export interface CategoryWrapper {
    Categories: Categories[];
}

export interface Categories {
    CategoryId: number;
    CategoryName: string;
    Items: CategoryItems[];
}

export interface CategoryItems {
    CategoryId: number;
    ItemId: number;
    ItemName: string;
}

