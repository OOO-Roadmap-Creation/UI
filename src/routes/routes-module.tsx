import routesMap from './routes';
import { Route, Routes } from 'react-router-dom';

const RoutesMap = () => {
    return (
        <Routes>
            {Object.entries(routesMap).map(([route, routeConfig]) => {
                const { component: Component } = routeConfig;
                return <Route key={route} path={route} element={<Component />} />;
            })}
        </Routes>
    );
};

export default RoutesMap
