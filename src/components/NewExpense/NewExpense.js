import uniqid from 'uniqid';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: uniqid()
        }
        console.log(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;