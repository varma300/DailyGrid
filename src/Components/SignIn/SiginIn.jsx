import { useRef } from "react"

function SignIn(){
    let data_Ref = {
        name : useRef(null),
        password : useRef(null)
    }

    let submit_SignIn = (e)=>{
        e.preventDefault();
        let signIn_Data ={
            name: data_Ref.name.current.value,
            password:data_Ref.password.current.value
        };
        console.log(signIn_Data);
    }
    
    return (
        <>
        <h3>SiginIn Page</h3>

            <form onSubmit={submit_SignIn}>
                <input type="text" ref={data_Ref.name}  placeholder="user name"/><br/><br/>
                <input type="password" ref={data_Ref.password} placeholder="password"/> <br/> <br/><br/>
                <button type="submit" >SignIn</button>

            </form>
        </>
    )
}

export default SignIn