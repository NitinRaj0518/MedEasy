import React, { useState } from 'react';
import './cart-item.css';

export const CartItem = (props) => {
  const [quantity, setQuantity] = useState(props.qty);

  const increaseHandler = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    props.onQuantityChange(props.course_name, newQuantity);
  };

  const decreaseHandler = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      props.onQuantityChange(props.course_name, newQuantity);
    } else {
      props.onRemoveItem(props.course_name);
    }
  };

  const closehandler = () => {
    props.onRemoveItem(props.course_name);
  }

  return (
    <div class="row border-top border-bottom">
      <div class="row main align-items-center">
        <div class="col-2"><img class="img-fluid" src={props.course_image} /></div>
        <div class="col">
          <div class="row text-muted">{props.course_name}</div>
          <div class="row">Prescription*</div>
        </div>
        <div class="col">
          <a href="#" onClick={decreaseHandler} style={{ fontSize: "25px", fontWeight: "20px" }} >-</a>
          <input style={{ width: "35px", textAlign: "center" }} type='text' value={quantity} className='itemqty' readOnly />
          <a href="#" style={{ fontSize: "20px" }} onClick={increaseHandler} >+</a>
        </div>
        <div class="col">&#8377; {props.course_price * quantity} <a href="#" style={{ paddingLeft: "11px", color:"red" }} class="close" onClick={closehandler}>&#10005;</a></div>
      </div>
    </div>
  );
};
