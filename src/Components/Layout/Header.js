import React,{Fragment} from "react";
import classes from './Header.module.css';
import mealImg from '../../Images/meals.jpg';
import Button from "./HeaderCartButton";



const Header =(props)=>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meal</h1>
                <Button onClickCartButton={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>               
                <img src={mealImg} alt="A table full of food"/>
            </div>

        </Fragment>
    )

};

export default Header;