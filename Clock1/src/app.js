import React, { Component } from 'react';
import Clock from './Clock/Clock';
import './App.css'; 
import Leading from './Clock/Leading';


class App extends Component{
	constructor(props){
		super(props);  
		this.state = { 
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			deadline: 'June 29, 2019',
			newDeadline:'',
			
		};
		this.changeDeadline=this.changeDeadline.bind(this);
	}
	

	componentWillMount() {
    this.getTimeUntil(this.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.deadline), 1000);
  }

	leading0(num) {
		return num < 10 ? '0' + num : num;
	}

	getTimeUntil(deadline) {
		deadline=this.state.deadline;
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));

		this.setState({days, hours, minutes, seconds});
	}
	
	changeDeadline(event) {

		this.setState({deadline: this.state.newDeadline});
	}

	render(){
		return(
			<div className='App'>
			
			
			<div className="App-title"> 
			Countdown to {this.state.deadline}
			</div>
			<Leading
			 days={this.state.days}
			 hours={this.state.hours}
			 minutes={this.state.minutes}
			 seconds={this.state.seconds}
			leading0={this.leading0}/>
			<input placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})} />

			 <Clock
			 changeDeadline={event=>this.changeDeadline(event)}
			 />
			 
			 
			
			</div>
			

			)
		}
	}

	export default App;