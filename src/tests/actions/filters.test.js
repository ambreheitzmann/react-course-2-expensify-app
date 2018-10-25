import { 
    setEndDate, 
    setStartDate, 
    setTextFilter, 
    sortByDate, 
    sortByAmount
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

test('should generate set end date object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    });
});

test('should generate set text filter object', () => {
    const text = 'hello';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text 
    });
});

test('should generate set text filter object width default', () => {
    const text = '';
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text 
    });
});

test('should generate action object for sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SET_SORT_BY_DATE',
    });
});

test('should generate action object for sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SET_SORT_BY_AMOUNT',
    });
});