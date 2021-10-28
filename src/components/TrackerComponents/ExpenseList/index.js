import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

const ExpenseList = () => {
  let expenseList = JSON.parse(window.localStorage.getItem('expenseList'));
  if (!expenseList) {
    expenseList = [];
  }
  return (
    <ul className="list-container">
      {expenseList.map((item, index) => {
        return (
          <li key={index} className="list-items">
            <FontAwesomeIcon className="list-item-icon" icon={faReceipt} />
            <span className="list-item-title">{item.title}</span>
            <span className="list-item-amount">- ${Math.abs(item.amount)}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
