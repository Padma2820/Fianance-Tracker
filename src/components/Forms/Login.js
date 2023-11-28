// import React, { Component } from "react";
// import { auth } from "../../Config/Fire";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import './Login.css';

// class Login extends Component{

//     state = {

//         email : "",
//         password :"",
//         fireErrors :""
//     }

//     login = (e) =>{

//         e.preventDefault();

//         auth.signInWithEmailAndPassword(this.state.email,this.state.password).catch((error)=>{

//             this.setState({fireErrors : error.message});
//         })
//     }
//     handleChange = e =>{
//         this.setState
//         ({[e.target.name]:e.target.value})
//     }

//     render(){


//         let errorNotification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null;
//         return(

//             <>
//             {errorNotification}
//             <form>
//                 <input type="text" className="regField" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" name="email" />

//                 <input type="password" className="regField" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" name="password" />

//                 <input onClick={this.login} type="submit" className="submitBtn" value= "ENTER" />
//                 </form>
//                 </>
//         )
//     }
// }

// export default Login;











// Login.js
import React, { Component } from "react";
import { auth } from "../../Config/Fire";
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

class Login extends Component {
  state = {
    email: "",
    password: "",
    fireErrors: ""
  };

  login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let errorNotification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null;

    return (
      <>
        {errorNotification}
        <form>
          <input type="text" className="regField" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" name="email" />
          <input type="password" className="regField" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" name="password" />
          <input onClick={this.login} type="submit" className="submitBtn" value="ENTER" />
        </form>
      </>
    );
  }
}

export default Login;
