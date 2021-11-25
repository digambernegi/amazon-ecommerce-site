export const getTotal=(cart)=>
cart?.reduce((amount, item)=>item.price+amount,0);

export const initialState = {
    cart: [],
    user: null,
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
              };

        case 'ADD_TO_CART': 
        return {...state,
        cart: [...state.cart, action.payload], //previous item + new added
        };
        
        case 'REMOVE_FROM_CART': 

        let newCart=[...state.cart];
        const index = state.cart.findIndex((cartItem) => cartItem.id === action.id );         
        
        if(index >= 0){
            newCart.splice(index, 1);
        }
        else{
            console.log("Can't delete!!")
        }
  
        return {...state, cart:newCart,};
        default: return state;
}
};

export default reducer;