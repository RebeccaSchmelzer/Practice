import React, {useState} from 'react';
//imports in curlys mean importing a piece of the library
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//output title and amount
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button>Change title</button>
    </Card>
  );
}

export default ExpenseItem;