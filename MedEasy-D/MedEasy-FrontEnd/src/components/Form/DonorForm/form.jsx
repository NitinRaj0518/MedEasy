import React, { useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

const DonorForm = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        gender: "",
        age: "",
        bloodgroup: "",
        positivedate: "",
        negativedate: "",
        phone: "",
        state: "",
        city: "",
        error: ""
    })

    let ename, value;
    const handleInputs = (e) => {

        ename = e.target.name;
        value = e.target.value;
        setUser({ ...user, [ename]: value });
    }
    function handleValidation() {

        var formIsValid = true;
        var age = parseInt(user.age);
        var pdate = new Date(user.positivedate);
        var ndate = new Date(user.negativedate);
        var today = new Date();
        console.log(pdate + " " + ndate + " " + today);
        if (age <= 18 || age >= 60) {
            formIsValid = false;
            user.error = "Age should be between 18 to 60. Please check the eligibility to donate plasma.";
        }
        else if (pdate.getFullYear() <= today.getFullYear()) {
            if (pdate.getMonth() <= today.getMonth()) {
                formIsValid = true;
            }
            else {
                formIsValid = false;
                user.error = "Please enter valid COVID-19 positive date";
            }
        }

        else if (ndate.getFullYear() <= today.getFullYear() && ndate.getFullYear() >= pdate.getFullYear()) {
            if (ndate.getMonth() <= today.getMonth() && ndate.getMonth() >= pdate.getMonth()) {
                formIsValid = true;
            }
            else {
                formIsValid = false;
                user.error = "Please enter valid COVID-19 negative date";
            }
        }

        return formIsValid;
    }

    const PostData = async (e) => {
        e.preventDefault();
        if (!handleValidation()) {
            alert(user.error);
        }
        else {
            const { name, username, password, gender, age, bloodgroup, positivedate, negativedate, phone, state, city } = user;

            const res = await fetch("http://localhost:5002/plasma/createdonor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, username, password, gender, age, bloodgroup, positivedate, negativedate, phone, state, city
                })
            });

            const data = await res.json();
            console.log(res.status);
            if (res.status === 422) {
                alert(data.error);
            }
            else {
                alert("Registration successful");
                history.push("getdonors");
            }
        }
    }

    /* const PostData = async(e) => {
         e.preventDefault();
         console.log(user);
         const {name ,username,password, gender, age, bloodgroup, positivedate, negativedate, phone, state, city}= user;
         alert(bloodgroup+" "+positivedate+" "+negativedate+" "+phone+" "+state+" "+city+" "+name+" "+gender+" "+age );
 
         fetch("http://localhost:5002/plasma/createdonor",{
             method:"POST",
             headers: {
                 "Content-Type": "application/json"
             }, 
             body:JSON.stringify({
                 name ,username,password, gender, age, bloodgroup, positivedate, negativedate, phone, state, city
             }),
             })
             .then((res)=>
             {
                 res.json()}
             )
             .then((data)=>{
                 console.log(data); 
                 history.push("getdonors");
             
         })
     } */
    return (
        <div style={{width: '100%'}}>
            <div className="signup-form">
                <h2 className="heading">Donate Blood</h2>
                {/* <Link to="/plasma"><p class="subtitle"> Please check the guidelines/eligibility to donate plasma before submitting the form.</p></Link> */}
                <hr />
                <form method="POST" className="register-form" id="register-form">
                    <div class="form-group">
                        <span className="labels">Name *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <span class="fa fa-user"></span>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                value={user.name}
                                onChange={handleInputs}
                                placeholder="Enter your full name"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Username *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <span class="fa fa-user"></span>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                name="username"
                                value={user.username}
                                onChange={handleInputs}
                                placeholder="Enter unique username"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Password *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <span class="fa fa-user"></span>
                                </span>
                            </div>
                            <input
                                type="password"
                                class="form-control"
                                name="password"
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Enter your password"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Gender *</span>
                        <div class="input-group">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="Male"
                                checked={user.gender === "Male"}
                                onChange={handleInputs}
                            // onClick={(e) => setUser({gender: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="male">Male</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="Female"
                                checked={user.gender === "Female"}
                                onChange={handleInputs}
                            // onClick={(e) => setUser({gender: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="female">Female</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="Other"
                                checked={user.gender === "Other"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({gender: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="other">Other</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Age * (Should be between 18 to 60)</span>
                        <div class="input-group">

                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input
                                type="number"
                                class="form-control"
                                name="age"
                                value={user.age}
                                onChange={handleInputs}
                                placeholder="Enter your age"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Blood Group *</span>
                        <div className="input-group">
                            <input
                                type="radio"
                                id="O+"
                                name="bloodgroup"
                                value="O+"
                                checked={user.bloodgroup === "O+"}
                                onChange={handleInputs}
                            // onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="O+">O+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="O-"
                                name="bloodgroup"
                                value="O-"
                                checked={user.bloodgroup === "O-"}
                                onChange={handleInputs}
                            // onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="O-">O-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="A+"
                                name="bloodgroup"
                                value="A+"
                                checked={user.bloodgroup === "A+"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="A+">A+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="A-"
                                name="bloodgroup"
                                value="A-"
                                checked={user.bloodgroup === "A-"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="A-">A-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="B+"
                                name="bloodgroup"
                                value="B+"
                                checked={user.bloodgroup === "B+"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="B+">B+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="B-"
                                name="bloodgroup"
                                value="B-"
                                checked={user.bloodgroup === "B-"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="B-">B-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="AB+"
                                name="bloodgroup"
                                value="AB+"
                                checked={user.bloodgroup === "AB+"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="AB+">A+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="AB-"
                                name="bloodgroup"
                                value="AB-"
                                checked={user.bloodgroup === "AB-"}
                                onChange={handleInputs}
                            //onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="AB-">AB-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                type="radio"
                                id="no"
                                name="bloodgroup"
                                value="Don't Know"
                                checked={user.bloodgroup === "Don't Know"}
                                onChange={handleInputs}
                            //  onClick={(e) => setUser({bloodgroup: e.target.value})}
                            />&nbsp;
                            <span className="radiolabels" for="no">Don't Know</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Date Of COVID-19 positive *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input
                                type="date"
                                class="form-control"
                                name="positivedate"
                                value={user.positivedate}
                                onChange={handleInputs}
                                placeholder="Enter date"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">Date Of COVID-19 negative *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input
                                type="date"
                                class="form-control"
                                name="negativedate"
                                value={user.negativedate}
                                onChange={handleInputs}
                                placeholder="Enter date"
                                required="required" />
                        </div>
                    </div>

                    <div class="form-group">
                        <span className="labels">Phone Number *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-phone"></i>
                                </span>
                            </div>
                            <input
                                type="number"
                                class="form-control"
                                name="phone"
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder="Enter your 10 digit phone number"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">State *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-briefcase"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                name="state"
                                value={user.state}
                                onChange={handleInputs}
                                placeholder="Enter your state"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <span className="labels">City *</span>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-briefcase"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                name="city"
                                value={user.city}
                                onChange={handleInputs}
                                placeholder="Enter your city"
                                required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" name="register" id="register" onClick={PostData} class="btn btn-primary btn-lg">Submit</button>
                    </div>

                </form>
            </div>
        </div>

    );
}


export default DonorForm;