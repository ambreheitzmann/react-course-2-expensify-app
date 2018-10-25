import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
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

