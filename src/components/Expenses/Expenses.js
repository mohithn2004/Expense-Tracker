import React from "react";

import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2022");

  function handleFilterChange(selectedYear) {
    setFilteredYear(selectedYear);
  }

  // function handleMapping(expense) {
  //   return (
  //     <ExpenseItem
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   );
  // }

  const filteredExpenses = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        <ExpensesChart  expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
