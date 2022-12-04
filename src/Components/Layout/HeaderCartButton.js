import classes from './HeaderCartButton.module.css';
import React,{Fragment} from 'react';
import CartIcon from '../Cart/CartIcon';


const Button=(props)=>{
    return (
        <Fragment>
            <button className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Your Cart 
                </span>
                <span className={classes.badge}>
                     0
                </span>
            </button>
        </Fragment>
    )
};

export default Button;
