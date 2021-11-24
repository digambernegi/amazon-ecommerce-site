import React,{createContext, useContext, useReducer} from "react";

//create context
export const StateContext = createContext();

//create Provider
export const StateProvider = ({reducer, initialState, children}) =>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
);

//use in components
export const useStateValue = () => useContext(StateContext);