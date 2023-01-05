import React from 'react';
import { Cookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

interface AuthWrapperProps {
    children: React.ReactElement;
}

const AuthWrapper = (props: AuthWrapperProps) => {
    const { children: Component } = props;
    const access = new Cookies().get('ROADMAP');
    if (!access) {
        return <Navigate replace to="/login" />;
    }

    return Component;
};

export default AuthWrapper;
