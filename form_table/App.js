import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Table from './Components/Table';
import {  Navbar, NavbarBrand} from 'reactstrap';





export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                  input:'SignUp',
                  name:'',
                  lname:'',
                  email:'', 
                  pass:'', 
                  conpass:'',
                  street:'', 
                  city:'',
                  pin:'',
                  row:'', 
                  users:[]};
    this.onChange = this.onChange.bind(this);
    this.deleteRow=this.deleteRow.bind(this);
    this.validatePassword=this.validatePassword.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    if( !this.validatePassword()) {
      let cpswd = document.getElementById("cpswd");
      cpswd.setCustomValidity("Passwords Don't Match");
      console.log("not validated");

      return false;
    } else {
      console.log("validated");
      

    const obj = { name:this.state.name, 
                  lname:this.state.lname, 
                  email:this.state.email, 
                  pass:this.state.pass, 
                  conpass:this.state.conpass, 
                  street:this.state.street, 
                  city:this.state.city, 
                  pin:this.state.pin };

  
    this.state.users.push(obj);
    this.setState({users:this.state.users}, () => this.clearInputs());
    }
  }
   
  
  
  clearInputs(){
    this.setState({name:'', lname:'', email:'', pass:'', conpass:'', street:'', city:'',pin:''});
    
  }

  deleteRow(row){
    var pos = this.state.users.indexOf(row);
    this.setState({users:this.state.users.slice(0,pos)});
   
    
  } 

onChange(e) {
 
  this.setState({ [e.target.name]: e.target.value});
}

validatePassword(){
  let pass= this.state.pass;
  let conpass= this.state.conpass;
  console.log(pass);
  console.log(conpass);

  if(pass == conpass) {
     console.log("true");
    return true;
      } else {
        console.log("false");
    return false;
    
  }
}




render(){
 
  return(
    
    <div className="container-fluid">

    <div className="nav" > 
      <a  href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#login"><span class="glyphicon glyphicon-log-in"></span> Login</a>
     </div>

    <style>{'body { background-color:papayawhip; }'}</style>
    <div className="abc">
      <h1>SignUp</h1>
    </div>
      <form className="form-horizontal" onSubmit={this.onSubmit.bind(this)}>
      
     
        <div className="input-group">
          <span className="input-group-addon">FirstName</span>
          <input type="text" 
          required ref={(ref) => this.inputName = ref} 
          onChange={e => this.onChange(e)}  
          value={this.state.name} 
          className="form-control" 
          placeholder="first name" 
          pattern="[A-Za-z]+" 
          title="Name cannot have special charaters or numeric values"
          arial-describedby="basic-addon1"
          name="name"/>
        </div>


        <div className="input-group">
          <span className="input-group-addon">Lastname</span>
          <input type="text" 
          required ref={(ref) => this.inputLname = ref} 
          onChange={e => this.onChange(e)}  
          value={this.state.lname} 
          className="form-control"  
          placeholder="last name" 
          pattern="[A-Za-z]+" 
          title="Lastname cannot have special charaters or numeric values"
          arial-describedby="basic-addon1"
          name="lname"/>
        </div>


        <div className="input-group">
          <span className="input-group-addon">Email</span>
          <input type="text" 
          required 
          ref={(ref) => this.inputEmail = ref} 
          onChange={e => this.onChange(e)}
          value={this.state.email} 
          className="form-control" 
          placeholder="Email" 
          pattern="^[a-zA-Z]+[0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          
          aria-describedby="basic-addon1"
          name="email" />
        </div>


        <div className="input-group">
          <span className="input-group-addon">Password</span>
          <input type="Password" 
          required ref={(ref) => this.inputPass = ref} 
          onChange={e => this.onChange(e)} 
          value={this.state.pass}
          className="form-control" 
          placeholder="Password" 
          aria-describedby="basic-addon1" 
          name="pass"/>
        </div>


        <div className="input-group">
          <span className="input-group-addon">Confirm Password</span>
          <input type="Password" 
          required ref={(ref) => this.inputConpass = ref} 
          onChange={e => this.onChange(e)} 
          value={this.state.conpass} 
          className="form-control" 
          id="cpswd"
          placeholder="Confirm Password" 
          aria-describedby="basic-addon1"
          name="conpass" />
        </div>

        <div className="input-group">
          <span className="input-group-addon">Street</span>
          <input type="text" 
          required ref={(ref) => this.inputStreet = ref} 
          onChange={e => this.onChange(e)} 
          value={this.state.street} 
          className="form-control" 
          placeholder="Street" 
          aria-describedby="basic-addon1"
          name="street" />
        </div>

        <div className="input-group">
          <span className="input-group-addon">City</span>
          <input type="text" 
          required ref={(ref) => this.inputCity = ref} 
          onChange={e => this.onChange(e)} 
          value={this.state.city} 
          className="form-control" 
          placeholder="City" 
          aria-describedby="basic-addon1" 
          name="city"/>
        </div>

       <div className="input-group">
          <span className="input-group-addon">Pin</span>
          <input type="number" 
          required ref={(ref) => this.inputPin = ref} 
          onChange={e => this.onChange(e)} 
          value={this.state.pin} 
          className="form-control" 
          placeholder="Pin" 
          aria-describedby="basic-addon1"
          name="pin" />
        </div>
        <div className="pqr">
        <button type="submit" className="btn btn-success">Sign up</button>
        </div>
         </form>

         
          

          <Table 
          users={this.state.users}
          deleteRow={this.deleteRow} 
          row={this.state.row}/> 
          
            </div>
         


      
   
  );  
}
}



