import React from 'react';
import './style.css';
import { addExpenseIncomeList } from '../../../utils/addExpenseIncomeList';
import { addTotal } from '../../../utils/addTotal';
import { AddModalContext } from '../../../context/AddModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

/* 
  This modal is responsible for adding new expenses and/or Income.
  The following are the functionalities:
  - [x] Keep track of total, expense, and Income
  - [x] Add a list of expense to local storage
  - [x] Add a list of income to local storage
  - [x] toggle off modal on submit
*/
const AddModal = () => {
  const [activeExpenese, setActiveExpense] = React.useState(true);
  const { setOpenModal, setIsSubmitting } = React.useContext(AddModalContext);
  let dataStructure = {
    type: 'expense',
    title: '',
    amount: 0,
  };
  const [value, setValue] = React.useState(dataStructure);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeExpenese) {
      value.amount = -value.amount;
    }
    console.log(value);
    //keep count of total,
    addTotal(value);

    if (activeExpenese) {
      addExpenseIncomeList(value, 'expenseList');
    } else {
      addExpenseIncomeList(value, 'incomeList');
    }

    setValue(dataStructure);
    setOpenModal(false);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="form-AddModal">
      <div className="form-dropBox"></div>
      <div className="form-container">
        <div className="form-actionButton">
          <button
            className={activeExpenese ? 'active' : null}
            onClick={() => {
              setActiveExpense(true);
              setValue((prev) => ({ ...prev, type: 'expense' }));
            }}
          >
            EXPENSE
          </button>
          <button
            className={activeExpenese ? null : 'active'}
            onClick={() => {
              setActiveExpense(false);
              setValue((prev) => ({ ...prev, type: 'income' }));
            }}
          >
            INCOME
          </button>
        </div>
        <form className="Add-form" id="Add-form">
          <div className="form-amount-container">
            <FontAwesomeIcon className="dollarSign" icon={faDollarSign} />
            <input
              id="form-amount"
              type="number"
              name="amount"
              value={value.amount}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <label className="form-label" htmlFor="form-title">
            I SPEND ON...
          </label>
          <input
            id="form-title"
            type="text"
            name="title"
            value={value.title}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="form-submit"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
