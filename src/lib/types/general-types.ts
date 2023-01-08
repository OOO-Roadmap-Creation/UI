interface UserInformation {
    name?: string;
    lastName?: string;
    patronymic?: string;
    workPlace?: string;
}

export interface User {
    email: string;
    password: string;
    nickname?: string;
    userInfo?: UserInformation;
}