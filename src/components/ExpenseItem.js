import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
export const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, cost } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${cost}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="edit button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
export default ExpenseItem;
