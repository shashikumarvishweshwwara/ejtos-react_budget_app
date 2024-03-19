import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
const [currency, setCurrency] = useState('');
const handleCurrencyChange = (event) => {
setCurrency(event.target.value);
}


return (
<div>
<div className='row'>

<div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
<div className="input-group-prepend">
<label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
</div>
<select className="custom-select" id="inputGroupSelect02" onChange={handleCurrencyChange}>
<option defaultValue value="$" name="dollar">$Dollar</option>
<option value="£" name="pound">£Pound</option>
<option value="€" name="euro">€Euro</option>
<option value="₹" name="rupees">₹Rupees</option>
</select>
</div>
</div>

</div>
);
};

export default Currency;
