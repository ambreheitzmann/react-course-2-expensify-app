import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('should set sortby to amount', () => {
    const state = filterReducer(undefined, {type: 'SET_SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'hello';

    const action = {
        text: text,
        type: 'SET_TEXT_FILTER',
    };
    const state = filterReducer(undefined, action);
    expect(state.sortBy).toBe('text');
    expect(state.text).toBe(text);

});

test('should start date filter', () => {
    const startDate = moment();
    const action = {
        startDate,
        type: 'SET_START_DATE'
    };
    const state = filterReducer(undefined, action);
    expect(state.sortBy).toBe('date');
    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const action = {
        endDate,
        type: 'SET_END_DATE'
    };
    const state = filterReducer(undefined, action);
    expect(state.sortBy).toBe('date');
    expect(state.endDate).toEqual(endDate);
});
