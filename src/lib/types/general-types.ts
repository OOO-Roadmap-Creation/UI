interface UserInformation {
    id?: number;
    name?: string;
    lastName?: string;
    patronymic?: string;
    workPlace?: string;
}

export interface User {
    id?: number;
    email: string;
    password: string;
    nickname?: string;
    role?: string;
    userInfo?: UserInformation;
}
