import RegistrationForm from '../modules/registration-form-module';
import LoginForm from '../modules/login-form-module';
import AuthWrapper from './auth-wrapper';

const routesMap = {
    '/registration': {
        component: () => <RegistrationForm />
    },
    '/': {
        component: () => (
            <AuthWrapper>
                <></>
            </AuthWrapper>
        )
    },
    '/login': {
        component: () => <LoginForm />
    }
};

export default routesMap;
