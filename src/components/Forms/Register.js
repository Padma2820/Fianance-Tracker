// import React, { Component } from "react";
// import { auth } from "../../Config/Fire";
// import {  updateProfile } from 'firebase/auth';

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import './Login.css';

// class Register extends Component{

//     state = {

//         email : "",
//         password :"",
//         displayName : "",
//         fireErrors :""
//     }
//     handleChange = e=>{
//         this.setState({

//             [e.target.name] : e.target.value
//         });
//     }
//     // register = (e) => {
//     //     e.preventDefault();

//     //     auth.createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
//     //         .then((user) => {
//     //             var currentUser = auth.currentUser;
//     //             currentUser.updateProfile({
//     //                 displayName : this.state.displayName
//     //             })
               
//     //         })
//     //         .catch((error) => {
//     //             this.setState({fireErrors : error.message});
//     //         });
//     // };


//     register = e => {
//         e.preventDefault();
    
//         auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
//             .then((user) => {
//                 var currentUser = auth.currentUser;
//                 currentUser.updateProfile({
//                     displayName: this.state.displayName
//                 });
//             })
//             .catch((error) => {
//                 this.setState({ fireErrors: error.message });
//             });
//     };
//     render(){
//         let errorNotification = this.state.fireErrors ?(<div className="Error">{this.state.fireErrors}</div>):null;

//         return(

//             <>
//             {errorNotification}
//             <form>
//             <input type="text" className="regField" placeholder="Enter Name" name="displayName" onChange={this.handleChange} value={this.state.displayName}/>
//                 <input type="text" className="regField" placeholder="Enter Email" name="email" onChange={this.handleChange} value={this.state.email} />
               
//                 <input type="password" className="regField" placeholder="Enter Password" name="password" onChange={this.handleChange} value={this.state.password}/>

//                 <input onClick={this.register} type="submit" className="submitBtn" value= "REGISTER" />
//                 </form>
//                 </>
//         )
//     }
// }

// export default Register;






























// Register.js
import React, { Component } from "react";
import { auth } from "../../Config/Fire";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './Login.css';

class Register extends Component {
    state = {
        email: "",
        password: "",
        displayName: "",
        fireErrors: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // register = (e) => {
    //     e.preventDefault();

    //     createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
    //         .then((userCredential) => {
    //             const currentUser = auth.currentUser;
    //             currentUser.updateProfile({
    //                 displayName: this.state.displayName
    //             });
    //         })
    //         .catch((error) => {
    //             this.setState({ fireErrors: error.message });
    //         });
    // };




    register = async (e) => {
        e.preventDefault();
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, this.state.email, this.state.password);
            const currentUser = auth.currentUser;
    
            await currentUser.updateProfile({
                displayName: this.state.displayName
            });
            console.log(currentUser);
    
            // Rest of your code (e.g., navigate to the dashboard or perform other actions)
        } catch (error) {
            this.setState({ fireErrors: error.message });
        }
    };

    render() {
        let errorNotification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null;

        return (
            <>
                {errorNotification}
                <form>
                    <input type="text" className="regField" placeholder="Enter Name" name="displayName" onChange={this.handleChange} value={this.state.displayName} />
                    <input type="text" className="regField" placeholder="Enter Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    <input type="password" className="regField" placeholder="Enter Password" name="password" onChange={this.handleChange} value={this.state.password} />
                    <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />
                </form>
            </>
        );
    }
}

export default Register;
