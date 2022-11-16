import "./NewExpense.css";

import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function handleStartEditing() {
    setIsEditing(true);
  }
   
  function handleStopEditing(){
   setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing ? <button className="add-expense" onClick={handleStartEditing}>Add Expense</button>
      : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleStopEditing} />}
    </div>
  );
}

export default NewExpense;
