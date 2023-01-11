import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesMap from './routes/routes-mapper';
import mainRoutesMap from './routes/main-routes-map';
import { CookiesProvider } from 'react-cookie';
import 'reactflow/dist/style.css';

function App() {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <RoutesMap routesMap={mainRoutesMap} />
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    );
}

export default App;
