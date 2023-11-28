import React, { Component } from "react";
import "./Main.css";
import { auth } from "../Config/Fire";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import Tracker from './Tracker/Tracker';
import {onAuthStateChanged} from 'firebase/auth';
import Spinner from '../assets/load.gif';

export default class Main extends Component {
  state = {
    user: 1,
    loading: true,
    formSwitcher : false
  }

  componentDidMount() {
    this.authListener();
}
  authListener(){

    auth.onAuthStateChanged((user)=>{

      if(user){
        this.setState({user});
      }else{

        this.setState({user:null});
      }
    })
  }
  formSwitcher = (action)=>{
    console.log(action);
    this.setState({

        formSwitcher : action === 'register' ? true : false
    });
  }

  render() {

    const form = !this.state.formSwitcher ? <Login /> :<Register />;

    if(this.state.user ===1){
      return(
        
        <div className="mainBlock">
          <div className="Spinner">
            <img src = {Spinner} alt="Spinner" className="ImgSpinner" />
          </div>
        </div>
      )
    }
    return (
      <>
      <h1 className="main-heading">Welcome to personal Expense Tracker</h1>
        <p></p>
{!this.state.user ? (
      <div className="mainblock">
        {form}
        {!this.state.formSwitcher ? (
          <span className="underLine">
            Not Registered?{" "}
            <button
              onClick={() => this.formSwitcher("register")}
              className="linkBtn"
            >
              Create an account
            </button>
          </span>
        ) : (
          <span className="underLine">
            Already Have an account?{" "}
            <button
              onClick={() => this.formSwitcher("login")}
              className="linkBtn"
            >
              LogIn Here
            </button>
          </span>
        )}
      </div>
    ) : (
      <Tracker user={this.state.user} />
    )}




  
       
      </>
    );
  }
}
