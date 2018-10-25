import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1538388000000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 30, createdAt: 1539165600000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1030, createdAt: 1000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
