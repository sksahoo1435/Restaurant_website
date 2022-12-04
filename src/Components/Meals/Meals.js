import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummerys from './MealsSummery';


const Meals =()=>{
    return(
        <Fragment>
            <MealsSummerys/>
            <AvailableMeals/>
            
        </Fragment>
    )
};

export default Meals;