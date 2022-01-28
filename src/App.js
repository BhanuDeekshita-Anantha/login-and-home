import { onAuthStateChanged } from 'firebase/auth'
import React from 'react';
import {auth} from './components/firebaseConfig'
import Login from './components/Login'
import Home from './components/Home'
class App extends React.Component{
  state={
     authUser:''
  }
  componentDidMount(){
    onAuthStateChanged(auth,(currentUser)=>{
      this.setState({
        authUser:currentUser
      })
    }
  )}
  render(){
    return this.state.authUser?<Home/>:
    <Login/>
    
  }
}

export default App;
