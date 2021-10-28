import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

const IncomeList = () => {
  let incomeList = JSON.parse(window.localStorage.getItem('incomeList'));
  if (!incomeList) {
    incomeList = [];
  }
  return (
    <ul className="list-container">
      {incomeList.map((item, index) => {
        return (
          <li key={index} className="list-items">
            <FontAwesomeIcon className="list-item-icon" icon={faMoneyBillAlt} />
            <span className="list-item-title">{item.title}</span>
            <span className="list-item-amount">${item.amount}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IncomeList;
