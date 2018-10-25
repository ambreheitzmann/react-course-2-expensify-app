import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/****************************** 
// EXPENSES
*******************************/
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const removeExpense = (
    {
        id = ''
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(( { id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else return expense;
            });
        default:
            return state;
    }
};
/****************************** 
// FILTERS
*******************************/

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT'
});

const sortBy = (filter, text) => ({
    type: 'SORT_BY',
    filter,
    text
});
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    filter: 'date',
    startDate: date
});

const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    filter: 'date',
    endDate: date
});

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                sortBy: 'text',
                text: action.text
              };
        case 'SET_SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.filter,
                text: action.text
            };
        case 'SET_START_DATE':
            return {
                ...state,
                sortBy: 'date',
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                sortBy: 'date',
                endDate: action.endDate
            };
        default:
            return state;
    }
};



// get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=> {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const startEndMatch  = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        
        return startDateMatch && startEndMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}
// store creation 

const store= createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 3, createdAt: 300 }));

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 1000, createdAt: 100 }));
/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 } ));
store.dispatch(setTextFilter('rent'));


store.dispatch(sortByAmount());
store.dispatch(sortBy('text', 'rent'));
*/
//tore.dispatch(setStartDate(150));
//store.dispatch(setEndDate(250));

//store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());


const demoState = {
    expenses: [{
        id: 1,
        description: 'Jan. fact',
        note: 'final payement',
        amount: 3000,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};
/*
console.log({
    ...demoState.expenses[0],
    description: 'new one',
    enPlus: 'prop en plus'
})*/