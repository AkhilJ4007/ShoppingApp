import React from 'react'
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import "./signIn.component.css"
import "../../css/buttonAnimation.css"
import { useForm } from "react-hook-form";
import {useSelector,useDispatch} from 'react-redux'
import {googleLoginSaga} from "../../redux/user/userActions"

function SignIn({signIn}) {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()  

    let userName = () => {
        return(
            <FormControl >
            {/* email */}
            <InputLabel htmlFor="userName">UserName</InputLabel>
            <Input id="userName" name = "userName" aria-describedby="userNameTxt" />
            <FormHelperText id="userNameTxt">We'll use this for validation wrong pass nd stuff</FormHelperText>
            </FormControl>
            
        )
    }

    const googleSignIn = () => {

        window.open("http://localhost:3000/auth/google","_self")

        // console.log("In google Sign in component")
        // dispatch(googleLoginSaga())
    }
    // data exists in this function

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className = "signInContainer">
            <div className= "signInBox">

            <h2>{signIn ? "I already have an account" : "I don't have an account" }</h2>
            <h5> {signIn ? "Sign In" : "Create an account" } </h5>

            <form onSubmit = {handleSubmit(onSubmit)}>

            {
                signIn ? null : userName()
            }
            <div>
            <FormControl >
            {/* email */}
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input inputRef = {register} type="text" name = "email" id="email" aria-describedby="emailText" />
            <FormHelperText id="emailText">We'll use this for validation wrong pass nd stuff</FormHelperText>
            </FormControl>
            </div>

            {/* password */}
            <div>
            <FormControl >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input inputRef = {register} type="text" name = "password" id="password" aria-describedby="passwordText" />
            <FormHelperText id="passwordText">We'll use this for validation wrong pass nd stuff</FormHelperText>
            </FormControl>
            </div>
            
            <div style = {{marginTop:"1rem"}}>
            <button type="submit" className = "buttonStyle btn-three ">{signIn? "Log In":"Sign Up"}</button>
            </div>

            </form>
            
            <div>
                
            </div>
                <button onClick = {googleSignIn} > Sign in with google</button>
            </div>
        </div>
    )
}

export default SignIn
