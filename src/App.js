import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const dummyExpenses= [];


function App(){

  const [expenses, setExpenses] = React.useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses} />
     </div>
  );
}

export default App;
