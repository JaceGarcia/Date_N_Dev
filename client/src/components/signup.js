import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUpLogIn extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
       redirect: false
   }
 }
 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }
 _handleSubmit = (e) => {
  e.preventDefault();
  axios.post("/auth", this.state).then((res) => {

      console.log("Success!");
  })
      .catch(err => console.log(err));
};


 render() {
  const buttonStyles = {
    borderRadius: "5px",
    fontSize: "15px",
    textDecoration: "none",
    margin: "20px",
    color: "#000",
    position: "relative",
    display: "flex",
    backgroundColor: "#fff",
    alignContent: "center"
}

   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <form onSubmit={this._signUp}>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <div>
           <label htmlFor="password">Confirm Password: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
         </div>
         <div>
           <label htmlFor="image">Profile Picture: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="image" value={this.state.image} />
         </div>
         <div>
           <label htmlFor="gender">Gender: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="gender" value={this.state.gender} />
         </div>
         <div>
           <label htmlFor="height">Height: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="height" value={this.state.height} />
         </div>
         <div>
           <label htmlFor="age">Age: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="age" value={this.state.age} />
         </div>
         <div>
           <label htmlFor="body_type">Body Type: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="body_type" value={this.state.body_type} />
         </div>
         <div>
           <label htmlFor="linked_in">Linked In: </label>
           <input style={buttonStyles} onChange={this._handleChange} type="text" name="linked_in" value={this.state.linked_in} />
         </div>
         <div>
           <label htmlFor="bio">Bio: </label>
           <textarea style={buttonStyles} onChange={this._handleChange} type="text" name="bio" maxlength="255" value={this.state.bio} />
         </div>
         
      <input style={buttonStyles} onClick={this._handleSubmit} type="submit" />

       </form>
     </div>
   );
 }
}

export default SignUpLogIn;