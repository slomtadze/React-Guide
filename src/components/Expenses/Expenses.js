import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from '../ExpensesFilter/ExpensesList';
import ExpensesChart from './ExpensesChart';



const Expenses = (props) => {

    const [pickedYear, setPickedYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setPickedYear(selectedYear)
    }

    const filteredExpensesArray = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === pickedYear;
    });   
    

    return(
        <Card className='expenses'>
            <ExpensesFilter defaulrYear = {pickedYear} onChangeFilter = {filterChangeHandler} />
            <ExpensesChart expenses ={filteredExpensesArray} />
            <ExpensesList items = {filteredExpensesArray}/>
        </Card>
    )

}

export default Expenses;