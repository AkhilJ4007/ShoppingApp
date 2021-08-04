import React from 'react'
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import "./signIn.component.css"
import "../../css/buttonAnimation.css"
import { useForm } from "react-hook-form";
import GoogleLogin from 'react-google-login'
import {useSelector,useDispatch} from 'react-redux'
import {googleLoginSaga,signUpSaga,loginSaga} from "../../redux/user/userActions"


function SignIn({signIn}) {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()  

    const responseSuccessGoogle = (response) => {
        console.log("In response Success", response)
    }

    const responseFailureGoogle = (response) => {


    }

    let userName = () => {
        return(
            <>
            <div>
            <FormControl >
            {/* email */}
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input inputRef = {register} id="name" name = "name" aria-describedby="userNameTxt" />
            <FormHelperText id="userNameTxt"></FormHelperText>
            </FormControl>
            </div>

            <div>
            <FormControl >
            {/* number */}
            <InputLabel htmlFor="number">Number</InputLabel>
            <Input inputRef = {register} id="number" name = "number" aria-describedby="userNameTxt" />
            <FormHelperText id="userNameTxt"></FormHelperText>
            </FormControl>
            </div>
            </>
        )
    }

    // const googleSignIn = () => {

    //     window.open("https://shopping-app-akj.herokuapp.com/auth/google","_self")

    //     // console.log("In google Sign in component")
    //     // dispatch(googleLoginSaga())
    // }
    // data exists in this function

    const onSubmit = data => {
        //console.log(data)
        const action = signIn ? loginSaga : signUpSaga

        dispatch(action(data))

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
            <FormHelperText id="emailText"></FormHelperText>
            </FormControl>
            </div>

            {/* password */}
            <div>
            <FormControl >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input inputRef = {register} type="text" name = "password" id="password" aria-describedby="passwordText" />
            <FormHelperText id="passwordText"></FormHelperText>
            </FormControl>
            </div>
            
            <div style = {{marginTop:"1rem"}}>
            <button type="submit" className = "buttonStyle btn-three ">{signIn? "Log In":"Sign Up"}</button>
            </div>

            </form>
            
            <div style = {{marginTop:"1rem"}}>
            <GoogleLogin
                clientId="918094003460-bsppt5q2utgdmaredmltbjssia9k02i7.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
                
            </div>
        </div>
    )
}

export default SignIn
