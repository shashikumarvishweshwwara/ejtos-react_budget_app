import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
const { dispatch,remaining } = useContext(AppContext);
const [name, setName] = useState('');
const [cost, setCost] = useState('');
const [action, setAction] = useState('');
const { expenses } = useContext(AppContext);
const { budget } = useContext(AppContext);
const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
    }, 0);
const submitEvent = () => {

if(cost > remaining) {
alert("The value cannot exceed remaining funds £"+remaining+"Budget:"+budget);
setCost("");
return;
}

const expense = {
name: name,
cost: parseInt(cost),
};
if(action === "dollar") {
dispatch({
type: 'RED_EXPENSE',
payload: expense,
});
} else if(action === "pound"){
dispatch({
type: 'ADD_EXPENSE',
payload: expense,
});
}
else if(action === "euro"){
    dispatch({
    type: 'ADD_EXPENSE',
    payload: expense,
    });
    }
    else {
        dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
        });
        }
};

return (
<div>
<div className='row'>

<div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
<div className="input-group-prepend">
<label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
</div>
<select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
<option defaultValue value="dollar" name="dollar">$Dollar</option>
<option value="pound" name="pound">£Pound</option>
<option value="euro" name="euro">€Euro</option>
<option value="rupees" name="rupees">₹Rupees</option>
</select>
</div>
</div>

</div>
);
};

export default AllocationForm;
