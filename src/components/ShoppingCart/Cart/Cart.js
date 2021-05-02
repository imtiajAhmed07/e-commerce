import React, { useContext } from 'react';
import { CountContext, UserContext } from '../../../App';
import CartChild from '../CartChild/CartChild';

const Cart = () => {
    
    const [cart, setCart] = useContext(UserContext)
    const [count, setCount] = useContext(CountContext)
    console.log('count here',count);
    const productCost = cart.reduce((total, pd) => total + parseInt(pd.price), 0)
    

    let shippingCost = 0
    if(productCost > 100){
        shippingCost = 50
    }
    if(productCost > 200){
        shippingCost = 70
    }
    if(productCost > 500){
        shippingCost = 100
    }

    return (
        <section>
            <div className="container">
                <div className="p-3 mt-5" style={{border: '1px solid gray'}}>
                    <div className="row">
                        <div className="col-md-6">
                            {
                                cart.map(pd => <CartChild pd={pd}></CartChild>)
                            }
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <div>
                                <h4 className="mb-3">Order Summary</h4>
                                {
                                    cart.length === 0 ? <h6 className="text-danger">Don't have any order!</h6> :
                                        <div>
                                            <h6>Total Items: {cart.length}</h6>
                                            <h6>Product Cost: ${productCost}</h6>
                                            <h6>Shipping Cost: ${shippingCost}</h6>
                                            <h6>Total Price: ${productCost + shippingCost}</h6>
                                            <button className="btn button text-white mt-3">Proceed Checkout</button>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;