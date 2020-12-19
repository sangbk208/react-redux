import React from 'react';
import ReactDOM from 'react-dom';
import App from './features/pages/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/reducers/song';

ReactDOM.render(
    <Provider store = {createStore(reducers)}>
        <App/>
    </Provider> 
    ,document.querySelector('#root')
);