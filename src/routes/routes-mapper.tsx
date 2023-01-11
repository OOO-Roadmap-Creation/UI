import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteInterface } from './types';

interface RoutesMapProps {
    routesMap: RouteInterface;
}

const RoutesMap = (props: RoutesMapProps) => {
    const { routesMap } = props;
    return (
        <Routes>
            {Object.entries(routesMap).map(([route, routeConfig]) => {
                const { component: Component } = routeConfig;
                return <Route key={route} path={route} element={<Component />} />;
            })}
        </Routes>
    );
};

export default RoutesMap;
