import { createContext, useReducer } from 'react';
import fuelReducer from "./FuelReducer";

const FuelContext = createContext('');
const initFunction = () => {
    return {};
}
export const FuelProvider = ({ children }) => {
    const initialState = {
        sites: [],
        site:{}
    };

    const [state, dispatch] = useReducer(fuelReducer, initialState, initFunction);

    return (
        <FuelContext.Provider value={{...state, dispatch}}>
            {children}
        </FuelContext.Provider>
    )
}
export default FuelContext;
