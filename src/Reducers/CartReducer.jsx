// Cart Reducer: CartReducer.jsx
export default function CartReducer(state, action) {

    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        let existingProduct = state.cart.find((elem) => elem.id === (id + color));

        if (existingProduct) {
            let updatedProduct = state.cart.map((elem) => {
                if (elem.id === (id + color)) {
                    let newAmount = elem.amount + amount;
                    if (newAmount >= elem.max) {
                        newAmount = elem.max;
                    }
                    return {
                        ...elem,
                        amount: newAmount
                    };
                } else {
                    return elem;
                }
            });
            return {
                ...state,
                cart: updatedProduct
            };
        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            };
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };
        }
    }

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((elem) => {
            if (elem.id === action.payload) {
                let incAmount = elem.amount + 1;
                if (incAmount >= elem.max) {
                    incAmount = elem.max;
                }
                return {
                    ...elem,
                    amount: incAmount
                }
            } else {
                return elem;
            }
        });
        return {
            ...state,
            cart: updatedProduct
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((elem) => {
            if (elem.id === action.payload) {
                let decAmount = elem.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...elem,
                    amount: decAmount
                }
            } else {
                return elem;
            }
        });
        return {
            ...state,
            cart: updatedProduct
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((elem) => elem.id !== action.payload);
        return {
            ...state,
            cart: updatedCart
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        };
    }

    if (action.type === "CART_TOTAL_ITEM") {
        let updatedItemVal = state.cart.reduce((accumulator, elem) => {
            let { amount } = elem;
            accumulator = accumulator + amount;
            return accumulator;
        }, 0);
        return {
            ...state,
            total_item: updatedItemVal
        };
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((accumulator, elem) => {
            let { price, amount } = elem;
            accumulator = accumulator + (price * amount);
            return accumulator;
        }, 0);
        return {
            ...state,
            total_price
        };
    }

    return state;
};