/** Models a User object */
export class User {
    _id: string;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    userType?: string;
}

export class Portfolio {
    _id: string;
    amount: number;
}

export class Fund {
    _id?: string;
    name?: string;
    quantity?: number;
}

export class Currency {
    id: string;
    name: string;
    rank: number;
    symbol: string;
    value: number;
}

export class Discussion {
    _id?: string;
    title: string;
    description: string;
}

export class Comment {
    _id?: string;
    discussion?: string;
    text: string;
    isExpertAnswer?: Boolean;
    createdBy?: string;
    dateCreated?: Date;
}
