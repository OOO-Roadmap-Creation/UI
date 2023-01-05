import { RegistrationFormState } from '../modules/registration-form-module';
import { LoginFormState } from '../modules/login-form-module';

export interface StateType {
    registrationForm: RegistrationFormState;
    loginForm: LoginFormState;
}
