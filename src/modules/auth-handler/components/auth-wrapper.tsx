import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from '../../../lib/types/general-types';

interface AuthWrapperProps {
    children: React.ReactElement;
    initialAuthHandled: boolean;
    userInformation: User | null;
    getUser: () => void;
}

const AuthWrapper = (props: AuthWrapperProps) => {
    const { children: Component, userInformation, initialAuthHandled, getUser } = props;

    useEffect(() => {
        if (!initialAuthHandled && !userInformation) {
            getUser();
        }
    }, [getUser, initialAuthHandled, userInformation]);

    const actualPath = document.location.pathname;
    const isRootPath = actualPath === '/';

    if (!initialAuthHandled) {
        if (!isRootPath) {
            return <Navigate replace to="/login" />;
        } else {
            return Component;
        }
    }

    if (userInformation) {
        if (!isRootPath) {
            return Component;
        }
        return <Navigate replace to="/general/personal" />;
    }

    return <Navigate replace to="/login" />;
};

export default AuthWrapper;
