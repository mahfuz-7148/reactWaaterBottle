

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className='flex items-center gap-4 mb-5'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img className='w-20' src={bottle.img} alt="" />

                </div>)
            }
        </div>
    );
};

export default Cart;