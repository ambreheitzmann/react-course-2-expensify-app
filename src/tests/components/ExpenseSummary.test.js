import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render total 0', () => {
    const wrapper =  shallow(<ExpenseSummary  expenseCount={0} expensesTotal={0}  />);
    expect(wrapper).toMatchSnapshot();
});


test('should render 10 expenses total $100.00', () => {
    const wrapper =  shallow(<ExpenseSummary  expenseCount={10} expensesTotal={10000}  />);
    expect(wrapper).toMatchSnapshot();
});