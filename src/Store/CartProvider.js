import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartSate ={
    items: [],
    totalAmount: 0
}

const CartReducer =(state, action)=>{
    if (action.type === 'ADD_CART_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex =state.items.findIndex(item =>item.id === action.item.id);
        
        const existingCartItem =state.items[existingCartItemIndex];
        
        
        let UpdatedItems;

        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            };
            UpdatedItems = [...state.items];
            UpdatedItems[existingCartItemIndex] = updatedItem;
        }else{
            UpdatedItems = state.items.concat(action.item);
        }
        

        return {
            items:UpdatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE_CART_ITEM') {
        
        const existingCartItemIndex =state.items.findIndex(item =>
            item.id === action.id);
        
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if(existingItem.amount === 1){
                updatedItems = state.items.filter(item => item.id !== action.id);
            }else{
                const updatedItem ={...existingItem, amount: existingItem.amount-1}
                updatedItems= [...state.items];
                updatedItems[existingCartItemIndex]= updatedItem;
            }
            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
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