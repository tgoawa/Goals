export interface Hours {
    HoursId: number;
    TeamMemberId: number;
    ChargeableRange: string;
    NonChargeableRange: string;
    FiscalYear: number;
    IndustryHours: ChargeTime;
    ServiceLineHours: ChargeTime;
}

export interface ChargeTime {
    CategoryId: number;
    CategoryName: string;
    Items: Item[];
}

export interface Item {
    ItemId: number;
    ItemName: string;
    PreviousHours: number;
    CurrentHours: number;
    PreviousYear: number;
}

export interface NonChargeHours {
    CategoryId: number;
    CategoryName: string;
    Items: NonChargeItem[];
}

export interface NonChargeItem {
    ItemId: number;
    itemName: string;
    CurrentHours: number;
    Notes: string;
    PreviousHours: number;
    PreviousYear: number;
    SuggestedRange: string;
}

export interface Categories {
    CategoryId: number;
    CategoryName: string;
    Items: [{
        CategoryId: number;
        ItemId: number;
        ItemName: string;
    }];
}


