

const Bottle = ({bottle, addToCart}) => {
    const { img, name, price, stock } = bottle;
    return (
        <div className='text-xl'>
            <img className='rounded-xl' src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button className='bg-amber-600 p-3 text-white rounded-lg mt-5 cursor-pointer' onClick={() => addToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;