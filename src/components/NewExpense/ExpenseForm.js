import React from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredAmount, setEnteredAmount] = React.useState("");
  const [enteredDate, setEnteredDate] = React.useState("");

  // const [userInput, setUserInput] = React.useState({
  //     enteredTitle : "",
  //     enteredAmount : "",
  //     enteredDate : ""
  // });

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //To use the initial values of userInput
    //   enteredTitle : event.target.value, //To overwrite the value of enteredTitle in user Input

    // });

    // setUserInput (function(prevState){  //used for using previous states.
    //      return {
    //       ...prevState,
    //       enteredAmount : event.target.value
    //         };
    //       });
  }

  function handleAmountChange(event) {
    setEnteredAmount(event.target.value);
  }

  function handleDateChange(event) {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };


 return (
   <form onSubmit={submitHandler}>
     <div className="new-expense__controls">
       <div className="new-expense__control">
         <label>Title</label>
         <input
           type="text"
           value={enteredTitle}
           onChange={handleTitleChange}
         />
       </div>

       <div className="new-expense__control">
         <label>Amount</label>
         <input
           type="number"
           min="0.01"
           step="0.01"
           value={enteredAmount}
           onChange={handleAmountChange}
         />
       </div>
       <div className="new-expense__control">
         <label>Date</label>
         <input
           type="date"
           min="2020-1-1"
           max="2030-1-1"
           value={enteredDate}
           onChange={handleDateChange}
         />
       </div>
     </div>
     <div className="new-expense__actions">
       <button className="cancel-button" type="button"onClick={props.onCancel} >cancel</button>
       <button className="add-button" type="submit">Add Expense</button>
     </div>
   </form>
 );
}

export default ExpenseForm;
