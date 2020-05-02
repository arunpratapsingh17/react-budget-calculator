import React from "react";
import { MdSend } from "react-icons/md";
export const ExpenseForm = ({
  charge,
  cost,
  handleCost,
  handleCharge,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            className="form-control"
            name="charge"
            placeholder="e.g- expense"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            name="amount"
            placeholder="e.g- 100"
            value={cost}
            onChange={handleCost}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
export default ExpenseForm;
