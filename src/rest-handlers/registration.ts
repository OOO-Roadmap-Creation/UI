import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080"
});

// todo add type
const registration = async (userInformation: any) => {
    const response = await request.post("/test", userInformation);
    return response.data;
};

export { registration };