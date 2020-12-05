import React from 'react';
import './Form.css';

const Form = props =>{
    return (
        <div className="upperContainer">
        <div className="startQuote">Search your city and check weather. It's better to not be suprised.</div>
        
        <form>
            <input type="text" 
            placeholder = "Type city..."
            onChange = {props.handleChange}/>
            <button onClick = {props.click}>Find!</button>
        </form>
        </div>
    )
}

export default Form;