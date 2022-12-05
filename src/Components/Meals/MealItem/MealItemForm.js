import React, { useRef} from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";


const MealItemForm = (props) => {

    
    const amountInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber >10) {
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                lable="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
        </form>
    )
};


export default MealItemForm;