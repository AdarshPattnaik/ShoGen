import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/CartReducer.jsx";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("localCart");
    // if (localCartData === []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if (!Array.isArray(parsedData)){
        return [];
    }
    return parsedData;
};

const CartProvider = ({ children }) => {

    const initialState = {
        // cart: [],
        cart: getLocalCartData(),
        total_item: "",
        total_price: "",
        shipping_fee: 50000,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, color, amount, product }
        });
    };

    const setIncrease = (id) => {
        dispatch({
            type: "SET_INCREMENT",
            payload: id
        });
    };

    const setDecrease = (id) => {
        dispatch({
            type: "SET_DECREMENT",
            payload: id
        });
    };

    const removeItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("localCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider
        value={{
            ...state,
            addToCart,
            removeItem,
            clearCart,
            setIncrease,
            setDecrease
        }}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };