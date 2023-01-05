import axios from "axios";
import {RegistrationPayload} from "../modules/registration-form-module/types/general-types";

const request = axios.create({
    baseURL: "http://localhost:3000"
});

const registration = async (userInformation: RegistrationPayload) => {
    const response = await request.post("/api/user", userInformation);
    return response.data;
};

export { registration };