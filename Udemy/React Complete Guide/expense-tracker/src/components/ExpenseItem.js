import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2022,5,29)
    const expenseTitle = 'car insurance'
    const expenseAmount = 29847

  return (
    <div className='expense-item'>
        <div>${expenseDate}</div>
        <div className='expense-item__description'>
            <h2>${expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem