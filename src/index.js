import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import First from './component/First';
import * as serviceWorker from './serviceWorker';
import { abcReducer } from './component/abc.reducer';

const store=createStore(abcReducer)

ReactDOM.render(
<Provider store={store}>
    <First/>
    </Provider>,document.getElementById('root'));


serviceWorker.unregister();
