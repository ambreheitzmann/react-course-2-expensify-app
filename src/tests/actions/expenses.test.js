import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense', () =>{
    const action = removeExpense( {id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense', () =>{
    const action = editExpense('123abc', {note: 'blabla'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'blabla'
        }
    });
});

test('should setup add expense', () =>{
    const expenseData = {
        description: 'Rent',
        note: 'from last month',
        amount: 109000,
        createdAt: 1000,
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense with default data', () =>{
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
