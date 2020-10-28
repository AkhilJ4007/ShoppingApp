import React from 'react'
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import "./signIn.component.css"
import "../../css/buttonAnimation.css"

function SignIn({signIn}) {

        
    let userName = () => {
        return(
            <FormControl >
            {/* email */}
            <InputLabel htmlFor="userName">UserName</InputLabel>
            <Input id="userName" aria-describedby="userNameTxt" />
            <FormHelperText id="userNameTxt">We'll use this for validation wrong pass nd stuff</FormHelperText>
            </FormControl>
            
        )
    }


    

    return (
        <div className = "signInContainer">
            <div className= "signInBox">

            <h2>I already have an account</h2>
            <h5> Sign in with email and password</h5>
            {
                signIn ? null : userName()
            }
            <div>
            <FormControl >
            {/* email */}
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" aria-describedby="emailText" />
            <FormHelperText id="emailText">We'll use this for validation wrong pass nd stuff</FormHelperText>
            </FormControl>
            </div>

            {/* password */}
            <div>
            <FormControl >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" aria-describedby="passwordText" />
            <FormHelperText id="passwordText">We'll use this for validation wrong pass nd stuff</FormHelperText>
            </FormControl>
            </div>
            
            <div style = {{marginTop:"1rem"}}>
            <button className = "buttonStyle btn-three ">{signIn? "Log In":"Sign Up"}</button>
            </div>
            
            </div>

        </div>
    )
}

export default SignIn
