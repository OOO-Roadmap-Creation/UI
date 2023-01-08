import { RegistrationFormState } from '../modules/registration-form-module';
import { LoginFormState } from '../modules/login-form-module';
import { MainPageState } from '../modules/main-page';
import { AuthHandlerState } from '../modules/auth-handler';

export interface StateType {
    registrationForm: RegistrationFormState;
    loginForm: LoginFormState;
    mainPage: MainPageState;
    authorization: AuthHandlerState;
}
