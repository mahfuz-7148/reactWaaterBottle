import Cart from "./Cart.jsx";
import Bottle from "./Bottle.jsx";
import {use, useEffect, useState} from "react";
import {addToStoredCart, getStoreCart, removeFromCart} from "../utilities/localStorage.js";


const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);

    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for (const id of storedCartIds) {
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, [bottles])


    const addToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)

        addToStoredCart(bottle.id)
    }

    const handleRemoveFromCart = id => {
        // console.log('remove item from the cart', id)

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }

    return (
        <div className='container mx-auto'>
            <h3 className='text-4xl text-center mt-5 mb-10'>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart  cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>

            <div className='grid grid-cols-4 gap-10'>
                {
                    bottles.map(bottle =>
                        <Bottle key={bottle.id}  bottle={bottle} addToCart={addToCart} />)
                }
            </div>
        </div>
    );
};

export default Bottles;