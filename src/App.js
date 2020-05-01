import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { uuid } from "uuidv4";
const initialExpensec = [
  {
    id: uuid(),
    charge: "Rent",
    cost: 1000,
  },
  {
    id: uuid(),
    charge: "Ramdibazi",
    cost: 103,
  },
  {
    id: uuid(),
    charge: "School",
    cost: 123,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpensec);
  console.log(expenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending:
        <span className="total">
          {expenses.reduce((acc, cur) => {
            return (acc = acc + cur.cost);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
