import React from "react";

import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


function ExpensesList(props){
    if(props.items.length === 0){
         return <h2 className="expenses-list__fallback">You were broke enough to not spend anything! :P</h2>
    }

    else{
      return (
      <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </ul>
      );
      }

}

export default ExpensesList;