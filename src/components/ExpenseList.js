import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
export const ExpenseList = ({
  expenses,
  clearList,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearList}>
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};
export default ExpenseList;
