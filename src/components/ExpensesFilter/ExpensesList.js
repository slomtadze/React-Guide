import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpensesList.css'


const ExpensesList = (props) => {

if (props.items.length === 0) {
    return (
        <p className='expenses-list__fallback'>No Expenses added</p>
    )
}       

return (
    props.items.map((el) => (
        <ExpenseItem 
            key={el.id}
            title={el.title} 
            amount={el.amount} 
            date={el.date}/>
    ))
)}

export default ExpensesList