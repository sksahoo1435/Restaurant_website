import React,{Fragment} from "react";
import classes from './Header.module.css';
import mealImg from '../../Images/meals.jpg';
import Button from "./HeaderCartButton";
import MealsSummery from "../Meals/MealsSummery";


const Header =(props)=>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meal</h1>
                <Button/>
            </header>
            <div className={classes['main-image']}>               
                <img src={mealImg} alt="A table full of food"/>
            </div>
            <MealsSummery/>
        </Fragment>
    )

};

export default Header;