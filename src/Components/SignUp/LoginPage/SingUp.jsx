import { useContext, useRef, useState } from "react";
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";

let Login = () => {

    let data = useContext(Context)
   let {signup,setSignup} = data
   let [signup_state, set_signup_state] =useState('');
   const navigate = useNavigate()
   const isLoggedIn = false;

    //adding useRef hook for reffering input to  a variable
    const inputRef = {
        name: useRef(null),
        email: useRef(null),
        password: useRef(null),
        re_passwod: useRef(null)
    }
    let signup_datas
    // create a funvction for taking input, checking password and navigate to login page
    const LoGin_Submit = (e) => {
        //prevent defalt use for stop refrushing while click login button
        e.preventDefault();
        //add input vales to variable
        signup_datas = {
            name: inputRef.name.current.value,
            email: inputRef.email.current.value,
            password: inputRef.password.current.value,
            re_passwod: inputRef.re_passwod.current.value
        }
        // set_signup_state(signup_datas);
        setSignup(signup_datas)
        // set_signup_state('') 

        console.log(signup.password);
        signup_datas.password === signup_datas.re_passwod ? navigate('/signin') : alert('Passwords are not matching')
    }
    return (
        <>
            <h3>SingUp Page</h3>
            <form onSubmit={LoGin_Submit}>
                <input type="text" placeholder="User Name" ref={inputRef.name} /><br></br><br />
                <input type="email" placeholder="email id" ref={inputRef.email} /> <br /><br />
                <input type="password" placeholder="password" ref={inputRef.password} /> <br /><br />
                <input type="password" placeholder="re enter password" ref={inputRef.re_passwod} /> <br /><br /><br />
                <button type="submit">SingUp</button>
            </form>
        </>
    )
}

export default Login;