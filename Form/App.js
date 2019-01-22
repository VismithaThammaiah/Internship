import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={value: '',isGoing: false};
     

    this.handleInputChange = this.handleInputChange.bind(this);

      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleChange(event) {
    this.setState({value: event.target.value1});
  }

   handleChange(event) {
    this.setState({value: event.target.value2});
  }

  handleChange(event) {
    this.setState({value: event.target.value3});
  }

  handleChange(event) {
    this.setState({value: event.target.value4});
  }
  
  


 handleSubmit(event) {
    alert( "Form was submitted");
    event.preventDefault();
  }


  render() {
    return (
      <form class="signup" onSubmit={this.handleSubmit}>
      <style>{'body{background-color:azure}'}</style>
        <div className="id">
        <h1> Simple Form</h1>
        
            <div className="id1">
            <label  > 
              Name:
            </label >
              <input type="text"   value={this.state.value1} onChange={this.handleChange} />
            
            <br/>
            </div>
        
           <div className="id2">
            <label>
              Password:
            </label>
              <input type="password"  value={this.state.value2} onChange={this.handleChange } />
            
            <br/>
            </div>


            <div className="id3">
            <label>
              Country:
            </label>
              <div className="options">
               <select value={this.state.value3} onChange={this.handleChange}>
                <option selected disabled>Enter country</option>
                <option value="india">India</option>
                <option value="us">US</option>
                <option value="dubai">Dubai</option>
                <option value="china">China</option>
              </select>
              </div>
            
            <br/>
            </div>

            <div className="id4">
            <label>
              Email:
            </label>
              <input type="email" value={this.state.value4} onChange={this.handleChange}/>
            
            <br/>
            </div>

            <div className="id5">
            <label>
            Gender:
            </label>
                <div className="gen">
                Male<input type="radio"  name="gender" value="Male"  />
                Female<input type="radio" name="gender" value="Female"   />
                </div>
            <br/>
            </div>

            <div className="id6">
            <label>
          I agree:
          </label>
          <input
            
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </div>
        <br />

        <div className="id7">
        <input type="submit" value="Submit" />
        <br/>
        </div>

        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
    

export default App;
