import Cart from "./Cart.jsx";
import Bottle from "./Bottle.jsx";
import {use, useState} from "react";


const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);



    const addToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
    }

    const handleRemoveFromCart = id => {
        console.log('remove item from the cart', id)

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }
    return (
        <div className='container mx-auto'>
            <h3 className='text-4xl text-center mt-5 mb-10'>Bottles: {bottles.length}</h3>
            <Cart  cart={cart}/>

            <div className='grid grid-cols-4 gap-10'>
                {
                    bottles.map(bottle =>
                        <Bottle key={bottle.id}  bottle={bottle} addToCart={addToCart}/>)
                }
            </div>
        </div>
    );
};

export default Bottles;