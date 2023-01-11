import React from 'react';
import PersonalPage from '../modules/personal-page/containers/personal-page';

const generalRoutesMap = {
    '/personal': {
        component: () => <PersonalPage />,
        menuTitle: 'My Page'
    }
};

export default generalRoutesMap;
