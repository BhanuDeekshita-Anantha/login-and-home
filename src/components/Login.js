import React, { Component } from 'react'
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword} from 'firebase/auth'
    import { auth } from './firebaseConfig'

export default class Login extends Component {
    state={
        username:"",
        password:"",
        login:false
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
         signInWithEmailAndPassword(auth,this.state.username,this.state.password)
            .then((u)=>{
                console.log(u)
            }).catch((err)=>{
                console.log(err)
            })
    }
    handleSignIn=()=>{
        createUserWithEmailAndPassword(auth,this.state.username,this.state.password)
            .then((u)=>{
                console.log(u)
            }).catch((err)=>{
                console.log(err)
            })

    }
    render() {
        return(
             <div>
            <input type="text"
              placeholder=" Enter Username" 
              onChange={this.handleChange}
              name="username"
              value={this.state.username}/>
        <input type="text"
             placeholder=" Enter Password" 
             onChange={this.handleChange}
             name="password"
             value={this.state.password}/>
             <button onClick={this.handleClick}>Login</button>
             <button onClick={this.handleSignIn}>Sign In</button>


       </div>
      )
    }
}

