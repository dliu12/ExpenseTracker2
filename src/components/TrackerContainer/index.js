import React from 'react';
import { TabContainer } from '../SharedComponents';
import {
  ExpenseList,
  IncomeList,
  AddModal,
  DataVisualizer,
} from '../TrackerComponents';
import { AddModalContext } from '../../context/AddModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

/* 
  This component is resposible for containing AddModal, dataVisualization, expense Lists.

  Functionalities:
  - [X] Display month, getFullYear
  - [X] Display expense list and income list
  - [X] Display data Visualization
  - [X] allow add and close modal
*/

const TrackerContainer = () => {
  const totalListStructure = {
    total: 0,
    expense: 0,
    income: 0,
  };
  const { openModal, setOpenModal, isSubmitting, setIsSubmitting } =
    React.useContext(AddModalContext);
  const [total, setTotal] = React.useState(totalListStructure);
  const titleList = ['Expenses', 'Incomes'];
  const componentList = [<ExpenseList />, <IncomeList />];
  const currentDate = new Date();

  const month = {
    0: 'January',
    1: 'Febuary',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  React.useEffect(() => {
    const totalList = JSON.parse(window.localStorage.getItem('totalList'));
    if (totalList) {
      setTotal(totalList);
    } else {
      setTotal(totalListStructure);
    }
    setIsSubmitting(false);
  }, [isSubmitting]);

  return (
    <div className="TrackerContainer">
      <header className="Tracker-actions">
        <span className="Tracker-month">
          {month[currentDate.getMonth()] + ', ' + currentDate.getFullYear()}
        </span>
        <button
          className={openModal ? 'CloseModal' : 'AddModal'}
          onClick={() => {
            setOpenModal((prev) => !prev);
          }}
        >
          {openModal ? (
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          ) : (
            <FontAwesomeIcon className="add-icon" icon={faPlus} />
          )}
        </button>
      </header>
      {openModal ? <AddModal /> : null}
      <div className="Tracker-data">
        <DataVisualizer data={[total.expense, total.income]} />
      </div>

      <span className="Tracker-total">
        Total:{' '}
        {total.total < 0 ? `-$${Math.abs(total.total)}` : `$${total.total}`}
      </span>
      <TabContainer title={titleList} componentList={componentList} />
    </div>
  );
};

export default TrackerContainer;
