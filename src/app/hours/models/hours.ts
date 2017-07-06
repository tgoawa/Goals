export class Hours {
    HoursId: number;
    TeamMemberId: number;
    IndustryHours: ChargeTime;
    ServiceLineHours: ChargeTime;
}

export class ChargeTime {
    CategoryId: number;
    CategoryName: string;
    Items: Item[];
}

export class Item {
    ItemId: number;
    ItemName: string;
    PreviousHours: number;
    CurrentHours: number;
    PreviousYear: number;
}

export class NonChargeItem {
    Id: number;
    Name: string;
    SuggestedRange: string;
    PrevHours: number;
    NextYear: number;
    Notes: string;
}


