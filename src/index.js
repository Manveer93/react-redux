import React from 'react';
import ReactDOM from 'react-dom';
//createStore creates a store.it is inbuilt function of redux amd takes reducer as an argument.
import { createStore,combineReducers} from 'redux';
//provider provides access to store to component of our application.
//providers are HOC.it takes component as an argument and returns component.
import { Provider } from 'react-redux';
import First from './component/First';
import * as serviceWorker from './serviceWorker';
//abcReducer used to import multiple reducers.
import { abcReducer } from './component/abc.reducer';
//store is similar to state in react and store is application based but state is component based.
const store=createStore(abcReducer)

ReactDOM.render(
<Provider store={store}>
    <First/>
    </Provider>,document.getElementById('root'));


serviceWorker.unregister();
