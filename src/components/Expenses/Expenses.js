import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';



const Expenses = (props) => {

    const [pickedYear, setPickedYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setPickedYear(selectedYear)
    }
    

    return(
        <Card className='expenses'>
            <ExpensesFilter defaulrYear = {pickedYear} onChangeFilter = {filterChangeHandler} />
            {props.items.map((el) => (
                <ExpenseItem 
                    key={el.id}
                    title={el.title} 
                    amount={el.amount} 
                    date={el.date}/>
            ))}
        </Card>
    )

}

export default Expenses;