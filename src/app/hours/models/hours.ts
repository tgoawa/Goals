export class Hours {
}

export class ChargeTime {
    ChargeTimeItem: ChargeTimeItem[];
}

export class ChargeTimeItem {
    Id: number;
    Name: string;
    CategoryId: number;
    PrevHours: number;
    NextYear: number;
}


