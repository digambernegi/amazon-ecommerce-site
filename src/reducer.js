export const getTotal=(cart)=>
cart?.reduce((amount, item)=>item.price+amount,0);

export const initialState = {
    cart: [{
        id:12,
        title:"Book",
        rating:4,
        price:1000,
        image:"./asset/applogo.svg",
         
    },
    {
        id:12,
        title:"Book",
        rating:4,
        price:1000,
        image:"./asset/applogo.svg",
         
    }],
    
    user: null,
};

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_CART': 
        return {...state,
        cart:[...state.cart, action.item], //previous item + new added
        };
        
        case 'REMOVE_FROM_CART': 

        let newCart=[...state.cart];
        const index = state.cart.findIndex((cartItem)=> cartItem.id===action.id );         
        
        if(index>=0){
            newCart.splice(index, 1);
        }
        else{
            console.log("Can't delete!!")
        }
  
        return {
            ...state,
           cart:newCart,
        };
        default: return state;
}
};

export default reducer;