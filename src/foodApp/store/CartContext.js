import React, { createContext, useReducer } from 'react'

const CartContext = createContext();

const initialState = {
    items : [],
}

const reducer = (state, action) => {
    if(action.type == "ADD"){
        const index = state.items.findIndex(curEle => curEle.id == action.payload.id);
        if( index >= 0){
            let itemToUpdate = state.items[index];
            let updatedItem = { ...itemToUpdate, quantity : itemToUpdate.quantity + 1};
            state.items.splice(index, 1, updatedItem)
            console.log(state.items)    
            return {
                items : [...state.items]
            }
        }else{
            return {
                items : [...state.items, action.payload]
            }
        }
    }

   
}

export const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (itemId) => {


        const item = allItems.find( curEle => {
            return curEle.id === itemId;
        });

        const findInd = initialState.items.findIndex( curEle => {
          return +curEle.id == +item.id
        });

        if(findInd >= 0){
            alert("Item already in cart")
            const itemToUpdate = initialState.items[findInd];

            const updatedQty = itemToUpdate.quantity + 1;
            const totalPrice = +item.price * updatedQty;

            const updatedCartItem = {
                ...itemToUpdate,
                quantity : updatedQty,
                total : totalPrice 
            }
            initialState.items.splice(findInd, 1, updatedCartItem);
        }else{
            const newCartItem = {
                name : item.foodName,
                quantity : 1,
                price : item.price,
                id : item.id,
                total : item.price
            }
            initialState.items.push(newCartItem);
        }
        
    }   

    const allItems = [
        {id : 101, foodName : "Pani Puri", price : 50},
        {id : 102, foodName : "Masala Puri", price : 100},
        {id : 103, foodName : "Bhel Puri", price : 20},
        {id : 104, foodName : "Dhahi Puri", price : 40},
    ];

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext