import { useState } from 'react';
import uniqid from 'uniqid';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: uniqid()
        }
        props.onAddExpense(expenseData)
    }

    const onSetIsEditing = () => setIsEditing(true);

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={onSetIsEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} isEditing = {setIsEditing}/>}
        </div>
    )
}

export default NewExpense;