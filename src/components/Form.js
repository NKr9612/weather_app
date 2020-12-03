import React from 'react';

const Form = props =>{
    return (
        <form>
            <input type="text" 
            placeholder = "Wpisz miasto"
            onChange = {props.handleChange}/>
            <button onClick = {props.click}>Wyszukaj</button>
        </form>
    )
}

export default Form;