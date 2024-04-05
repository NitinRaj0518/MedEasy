import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../cart-item/CartItem';
import './cart.css';
import CartContext from '../../store/CartContext';

const Cart = () => {
  const CartCtx = useContext(CartContext);
  const [noOfItems, setNoItems] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const shippingOptions = {
    "Standard-Delivery": 0,
    "Speed-Delivery": 20,
    "Express-Delivery": 40
  };

  useEffect(() => {
    setNoItems(CartCtx.cartItems.length);
  }, [CartCtx.cartItems]);

  const handleQuantityChange = (course_name, newQuantity) => {
    const updatedCartItems = CartCtx.cartItems.map(item => {
      if (item.course_name === course_name) {
        return { ...item, qty: newQuantity };
      }
      return item;
    });
    CartCtx.setCartItems(updatedCartItems);
  };

  const getTotalItems = () => {
    return CartCtx.cartItems.reduce(
      (totalItems, { qty: itemQty }) =>
        totalItems + itemQty, 0
    );
  };

  const getTotalCost = () => {
    return CartCtx.cartItems.reduce(
      (totalCost, { course_price: itemCost, qty: itemQty }) =>
        totalCost + parseFloat(itemCost * itemQty), 0
    ).toFixed(2);
  };

  const handleShippingOptionChange = (event) => {
    const selectedOption = event.target.value;
    setShippingCost(shippingOptions[selectedOption]);
  };

  const getTotalPriceWithShipping = () => {
    return (parseFloat(getTotalCost()) + shippingCost).toFixed(2);
  };

  const handleRemoveItem = (course_name) => {
    const updatedCartItems = CartCtx.cartItems.filter(
      (item) => item.course_name !== course_name
    );
    CartCtx.setCartItems(updatedCartItems);
  };

  return (
    <div className="card" id="cartCard">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row" style={{ padding: "10px 0 0 0" }}>
              <div className="col"><h4><b>Shopping Cart</b></h4></div>
              <div className="col align-self-center text-right text-muted">{noOfItems} Items</div>
            </div>
          </div>
          <div>
            {CartCtx.cartItems.map((item, index) =>
              <CartItem
                course_name={item.course_name}
                course_price={item.course_price}
                course_image={item.course_image}
                qty={item.qty} key={index}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem} />
            )}
          </div>
          <div className="back-to-shop"><Link to="/medicine" style={{fontSize: "20px"}}>&#8592;</Link><span style={{fontSize: "20px"}} className="text-muted">Back to shop</span></div>
        </div>
        <div className="col-md-4 summary" style={{ padding: "20px 20px 20px 20px" }}>
          <div><h5><b>Summary</b></h5></div>
          <hr />
          <div className="row">
            <div className="col">Total Items in Cart :- {getTotalItems()}</div>
            <div className="col text-right">Cost :- &#8377; {getTotalCost()} </div>
          </div>
          <hr />
          <form>
            <p style={{ color: "black" }}>SHIPPING TYPE</p>
            <select id='Selection' onChange={handleShippingOptionChange}>
              <option className="text-muted" value="Standard-Delivery">Standard-Delivery :- &#8377;0.00  (3-4 Days)</option>
              <option className="text-muted" value="Speed-Delivery">Speed-Delivery :- &#8377;20.00 (2 Days)</option>
              <option className="text-muted" value="Express-Delivery">Express-Delivery :- &#8377;40.00 (0-1 Day)</option>
            </select>
            <p style={{ color: "black" }}> Address</p>
            <input id="code" placeholder="Select Adress" />
          </form>
          <hr />
          <div className="row" style={{ bordertop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL PRICE :- </div>
            <div className="col text-right">&#8377; {getTotalPriceWithShipping()}</div>
          </div>
          <button className="btn" id='checkout'>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
