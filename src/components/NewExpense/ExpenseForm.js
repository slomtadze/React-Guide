import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('') 
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('') 
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('') 
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.isEditing(false)

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }

    const onCancelNewExpense = () => props.isEditing(false) 

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                     value={enteredTitle} 
                     onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                     value={enteredAmount} 
                     min='0.01' 
                     step='0.01' 
                     onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                     value={enteredDate}
                     min='2019-01-01'
                     max='2022-12-31' 
                     onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={onCancelNewExpense}>Cancel</button>
                    <button type='submit'>Add Expence</button>
                </div>                
            </div>
        </form>
    )
}

export default ExpenseForm;