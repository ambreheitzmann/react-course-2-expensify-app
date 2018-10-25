import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 
import selectTotalExpensesAmount from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';



export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const totalExpensesFormated = numeral(expensesTotal / 100).format('$0,0.00');
    return(
    <div>
            Viewing {expenseCount} expense{expenseCount> 1 && `s`} 
            totalling {totalExpensesFormated}
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibileExpense = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibileExpense.length,
        expensesTotal: selectTotalExpensesAmount(visibileExpense)
    };
  };
  
  export default connect(mapStateToProps)(ExpenseSummary);
