import { useState } from "react";
import { validEmail, validPassword } from './regex.js';
import './form.css'


function Form () {

    const [obj, setObj] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    })

    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPaswordErr] = useState(false)

    const email = obj.email
    const password = obj.password

    const data  = () => {
        if(!validEmail.test(email)) {
            setEmailErr(true)
        }

        if(!validPassword.test(password)) {
            setPaswordErr(true)
        }
    }
    
    const myFunction = (e) => {
        setObj({...obj, name:e.target.value})
    }  

    const myFunction2  =(e) => {
        setObj({...obj, lastname:e.target.value})
    }

    const myFunction3 = (e) => {
        setObj({...obj, email:e.target.value})
    }

    const myFunction4 = (e) => {
        setObj({...obj, password:e.target.value})
    }

      
    return (
        <>
             <div className="signup-container">
        <h2>Sign up</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={myFunction}
          />
          <input type="text"
          placeholder="Lastname"
          onChange={myFunction2}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={myFunction3}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={myFunction4}
          />
         
         <div className="button-div">
            <button onClick={data}>Sign up</button>
         </div>
        </form>
      </div>
        </>
    )
   
        
}
    




export default Form