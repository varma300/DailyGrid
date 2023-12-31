import { useContext, useRef } from "react"
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";

function SignIn(){
let data = useContext(Context);
let {signup, setSignup} = data
let heroNavigate = useNavigate()
// let {name, password} = signup
    let data_Ref = {
        signin_name : useRef(null),
        signin_password : useRef(null)
    }

    let submit_SignIn = (e)=>{
        e.preventDefault();
        let signIn_Data ={
            signin_name: data_Ref.signin_name.current.value,
            signin_password:data_Ref.signin_password.current.value
        };
        (signup.password  === signIn_Data.signin_password ) ? heroNavigate('/hero'): alert('user name and password not matching, please signup ');

        console.log(signup.name );
    }
    
    return (
        <>
        <h3>SiginIn Page</h3>

            <form onSubmit={submit_SignIn}>
                <input type="text" ref={data_Ref.signin_name}  placeholder="user name"/><br/><br/>
                <input type="password" ref={data_Ref.signin_password} placeholder="password"/> <br/> <br/><br/>
                <button type="submit" >SignIn</button>

            </form>
        </>
    )
}

export default SignIn