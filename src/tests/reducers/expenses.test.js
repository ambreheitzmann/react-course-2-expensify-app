import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state value', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    } 
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'blablabla'
    } 
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense ', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id:'new-specific-to-test-id',
            description: 'gummy',
            note: '',
            amount: 195,
            createdAt:0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});


test('should edit expense ', () => {
    const newAmount = 280080;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: newAmount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(newAmount);
});

test('should not edit expense if id not found ', () => {
    const newAmount = 280080;
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'id-which-doesnt-exist',
        updates: {
            amount: newAmount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});