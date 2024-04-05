import React, { useContext, useState, useEffect } from 'react';
import './Course.css';
import Notification from './Notification';
import CartContext from '../../store/CartContext';
import CourseModal from './CourseModal';

export const Course = (props) => {
    const CartCtx = useContext(CartContext);
    const [notification, setNotification] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
        }, 1000);
    };


    const buyNowHandler = () => {
        const { name, image, price } = props;
        const existingCourse = CartCtx.cartItems.find((item) => item.course_name === name);

        if (existingCourse) {
            existingCourse.qty = existingCourse.qty + 1;
            showNotification(`Added "${name}" to the cart. Quantity: ${existingCourse.qty}`);
        } else {
            const cartObject = {
                course_name: name,
                qty: 1,
                course_price: price,
                course_image: image
            };
            CartCtx.setCartItems([...CartCtx.cartItems, cartObject]);
            showNotification(`"${name}" has been added to the cart.`);
        }
    };
    const showDetailsHandler = () => {
        setSelectedCourse(props); // Set the selected course details
        setShowModal(true); // Show the modal
    };

    return (
        <div>
            <div class="card" id="Med" style={{ width: '19rem'}}>
                <img src={props.image} class="card-img-top" alt={props.name} />
                <div class="card-body">
                    <h5 class="card-title text-start">{props.name}</h5>
                    <p class="card-text text-start">Some quick example text to build on the card title.</p>
                    <div className='row' style={{padding: "0 0 15px 0"}}>
                        <div class="col" style={{textAlign: "left", padding:"0 0 0 11px"}}>By - {props.provider}</div>
                        <div class="col text-right">&#8377;{props.price}</div>
                    </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary mx-2" type="button" onClick={showDetailsHandler}>Details</button>
                        <button class="btn btn-primary mx-2" type="button" onClick={buyNowHandler}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <CourseModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={selectedCourse ? selectedCourse.name : ""}
                imageSrc={selectedCourse ? selectedCourse.image : ""}
                body="
                SIDE EFFECTS OF NAMCOLD VAPOCAP:
                COMMON:
                Nasal irritation,
                Nausea,
                Vomiting,
                Abdominal pain,
                Headache,
                Dizziness,
                Confusion,
                Agitation,
                Anxiety,
                Unrealistic visions,
                Abnormal muscle jerks,
                Overactive body reflexes"
            // body={selectedCourse ? selectedCourse.description : ""}
            />
            {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
        </div>
    );
};
