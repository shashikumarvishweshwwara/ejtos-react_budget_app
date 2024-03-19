import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
const { budget } = useContext(AppContext);
const { currency } = useContext(AppContext);
const { expenses } = useContext(AppContext);
const { remaining } = useContext(AppContext);
const [newBudget, setNewBudget] = useState(budget);

const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
    }, 0);
const handleBudgetChange = (event) => {

    if(event.target.value>20000)
    {
        alert("The value cannot exceed remaining funds £"+remaining);
        return;  
    }
    if(event.target.value<totalExpenses)
{
    alert("You cannot reduce the budget value lower than the spending");   
}
setNewBudget(event.target.value);
}
return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
);
};
export default Budget;
