import Login from "../SignUp/LoginPage/SingUp"
import SignIn from "../SignIn/SiginIn"
import { BrowserRouter, Link, Route, Router,Routes } from "react-router-dom"

let Home = ()=>{
    return(
        <BrowserRouter>
        
        <div>
            <nav>
                <ul>
                    <li>Home Page</li>
                    <li><Link to='/'>SignUp Page</Link></li>
                    <li><Link to='/signin'>SiginIn Page</Link> </li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/" Component={Login} />
                <Route path='/signin' Component={SignIn}/>

            </Routes>
        </div>
        

        </BrowserRouter>
    )
}

export default Home