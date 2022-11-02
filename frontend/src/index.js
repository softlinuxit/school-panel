import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ConnectedRouter } from 'connected-react-router';
import { configureStore, getHistory } from 'modules/store';
import { Provider } from 'react-redux';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={getHistory()}>
            <App />
        </ConnectedRouter>
    </Provider >,
    document.getElementById('root')
);
serviceWorker.unregister();