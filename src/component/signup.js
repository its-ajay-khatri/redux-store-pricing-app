import React,{ useState } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from '../store/slices/userSlice';
import store from '../store/index';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './header';

// const userSlice = createSlice({
//     name: "user",
//     initialState: "",
//     reducers: {
//       saveUser: (state, action) => action.payload
//     }
//   });
  
//   const store = configureStore({
//     reducer: {
//       user: userSlice.reducer
//     }
//   });

const Signup = () => {

    const dispatch = useDispatch(); // <-- dispatch function
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", country: "", phone: "", work:"", password: "", cpassword: ""
    });

    const [nameIsValid, setNameIsValid] = useState();
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [phoneIsValid, setPhoneIsValid] = useState();
    const [countryIsValid, setCountryValid] = useState();
    const [passwordCPassword, setPasswordCPassword] = useState("");

    let name, value;

    const handleInputs = (event) => {
        //console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]: value});
    }


    const PostData = async (event) => {
        event.preventDefault();

        setEmailIsValid("");
        setNameIsValid("");
        setPasswordCPassword("");
        setPasswordIsValid("");
        setPhoneIsValid("");
        setCountryValid("");

        const { name, email, phone, country, work, password, cpassword} = user;

        // setNameIsValid(name.trim().length > 0);
        // setPhoneIsValid(phone.length < 10);
        // setEmailIsValid(email.includes('@'));
        // setPasswordIsValid(password.trim().length > 6);

        if((name.trim().length < 1) || (name.trim().length > 40 )){
            setNameIsValid("Incorrect Name, too short or too long name!")
        }

        else if((!(email.includes('@'))) || (!email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/))){
            setEmailIsValid("Incorrect email Address, it should contain @ and it should not contain UpperCase Characters");
        }
        else if((!country.includes("+"))){
            setCountryValid("it should contain +");
        }
        else if((phone.length < 10) || (phone.length > 12) || (phone.trim().includes('0'))){
            setPhoneIsValid("Contact Number should be in range of 10 to 12 numbers and should not contains 0")
        }
        else if((password.trim().length < 8) || (password.trim().length > 12)){
            setPasswordIsValid("Password should contain atleast 8 characters but not more than 12 characters")
        }
        else if(password.includes(' ')){
            setPasswordIsValid("Password should not contain any space")
        }
        else if(password !== cpassword){
            setPasswordCPassword("Password and Confirm Password didn't match!")
        }

        else{

            /*----------------------------------Section--------------------------------------------------*/
            
            dispatch(userSlice.actions.saveUser(user)); // <-- dispatch the action
            navigate("/main");


        }


    }

    return(
        <>
            <Header />
             <div className="my-5">
                <h1 className="text-center">Register</h1>
            </div>
            <div className="container register_div">
                <div className="row">
                    <div className="col-md-7 col-10 mx-auto">
                    <form method="POST" id="register-form">
                        <div class="form-group">
                            Your Name
                            <input type="text" className="form-control mt-2" id="name" name="name" value={user.name} onChange={handleInputs} placeholder="enter your name"/>
                            <div id="nameHelp" className="form-text" style={{color: "red"}}>{nameIsValid}</div>
                        </div>
                        <div class="form-group">
                            Email address
                            <input type="email" className="form-control mt-2" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="enter name@example.com" />
                            <div id="emailHelp" className="form-text" style={{color: "red"}}>{emailIsValid}</div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                            Conuntry Code
                            <input type="text" className="form-control mt-2" id="country" name="country" value={user.country} onChange={handleInputs} placeholder="Country Code" />
                            <div id="emailHelp" className="form-text" style={{color: "red"}}>{countryIsValid}</div>
                            </div>
                            <div class="col">
                            Phone
                            <input type="number" className="form-control mt-2" id="phone" name="phone" value={user.phone} onChange={handleInputs} placeholder="enter your Contact Number"/>
                            <div id="phoneHelp" className="form-text" style={{color: "red"}}>{phoneIsValid}</div>

                            </div>
                        </div>
                        <div class="form-group">
                            Profession
                            <input type="text" className="form-control mt-2" id="work" name="work" value={user.work} onChange={handleInputs} placeholder="enter Your Profession" />
                        </div>
                        <div class="form-group">
                            Password
                            <input type="password" className="form-control mt-2" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="enter Your Password" />
                            <div id="passHelp" class="form-text" style={{color: "red"}}>{passwordIsValid}</div>
                        </div>
                        <div class="form-group">
                            Confirm Password
                            <input type="password" className="form-control mt-2" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Conform Password" />
                            <div id="passHelp" class="form-text" style={{color: "red"}}>{passwordCPassword}</div>
                        </div>
                        <div className="col-md-12  mb-3">
                            <input type="submit" name="signup" className='btn btn-primary' onClick={PostData} value="register"/>
                        </div>
                        </form>
                        {/* <div className='already-have-account'>Already have an Account? <NavLink to="/login">Sign In</NavLink></div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup