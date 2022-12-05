import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartSate ={
    items: [],
    totalAmount: 0
}

const CartReducer =(state, action)=>{
    if (action.type === 'ADD_CART_ITEM') {
        const UpdatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items:UpdatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    return defaultCartSate;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartSate);
    
    const addItemToCartHandler =(item)=>{
        dispatchCartAction({type: 'ADD_CART_ITEM',item: item});
    };

    const removeItemToCartHandler =(id)=>{
        dispatchCartAction({type: 'REMOVE_CART_ITEM',id:id})
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:  addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;