import { useRef } from "react";

let Login = () => {

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
        let out = signup_datas.password === signup_datas.re_passwod ? 'Login' : 'Passwords are not matching';
        alert(out)
    }
    // (signup_datas.password===signup_datas.re_passwod) ? alert('congradulations') : alert('passwords are wrong')
    return (
        <>
            <h3>Login Page</h3>
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