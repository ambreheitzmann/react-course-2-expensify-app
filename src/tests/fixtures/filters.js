import moment from 'moment';


export const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    enDate: undefined

};

export const altFilters = {
    text: '',
    sortBy: 'date',
    startDate: moment().subtract(4, 'days') ,
    enDate: moment().add(4, 'days') 
};