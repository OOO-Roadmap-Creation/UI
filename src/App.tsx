import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesMap from './routes/routes-mapper';
import mainRoutesMap from './routes/main-routes';
import { CookiesProvider } from 'react-cookie';


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
