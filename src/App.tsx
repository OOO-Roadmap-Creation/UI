import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesMap from './routes/routes-module';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RoutesMap />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
