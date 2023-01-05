
interface UserInformation {
    name?: string;
    lastName?: string;
    patronymic?: string;
    workPlace?: string;
}

export interface RegistrationPayload {
    email: string;
    password: string;
    nickname?: string;
    userInfo?: UserInformation;
}