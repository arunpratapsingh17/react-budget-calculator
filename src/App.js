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
  //*******STATE VALUES *************/
  //***EXPENSES */
  const [expenses, setExpenses] = useState(initialExpensec);
  //*****Single Expense ****/
  const [charge, setCharge] = useState("");

  //*****Single Cost *******/
  const [cost, setCost] = useState("");
  //*****Alert ****/
  const [alert, setAlert] = useState({ show: false });
  //****************FUNCTIONALITIES */
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleCost = (e) => {
    setCost(e.target.value);
  };
  //**HANDLING ALERT */
  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text,
    });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge != "" && cost > 0) {
      const singleExpense = { id: uuid(), charge, cost };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setCost("");
    } else {
      //handleAlert
      handleAlert({
        type: "danger",
        text: "Charge can't be null and cost has to be greater than zero",
      });
    }
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          cost={cost}
          handleCharge={handleCharge}
          handleCost={handleCost}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending:
        <span className="total">
          {expenses.reduce((acc, cur) => {
            return (acc = acc + parseInt(cur.cost));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
