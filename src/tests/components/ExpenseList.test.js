import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';



test('should render expsne list with expense', () => {
    const wrapper =  shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});