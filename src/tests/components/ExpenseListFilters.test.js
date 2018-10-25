import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByAmount, setStartDate, setEndDate,sortByDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();

    sortByAmount = jest.fn();
    sortByDate= jest.fn();
    
    setStartDate = jest.fn();
    setEndDate = jest.fn();
  
    history = { push: jest.fn() };
    wrapper = shallow(
      <ExpenseListFilters 
        setTextFilter={setTextFilter}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        filters={filters}
      />
    );
  });

  test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();

  });