import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(){
		super();
			
			this.state =
			{
				name: "Liam",
				skill: "React"
			}

			this.handleChange = (e) => {
				this.setState({
					name: e.target.value
				})
			}

			this.handleSubmit = (e) => {
				e.preventDefualt();
				console.log('This form was submitted by', this.state.name)
			}

			this.handleClick = (e) => {
				console.log('This button was clicked')
			}

			this.handleMouseover = (e) => {
				console.log('stop that tickels')
			}

			this.handleCopy = (e) => {
				console.log('stop stealing my content')
			}
	}
	render(){
	  return(
	   <div className="App">
         <h1>My first name is {this.state.name}</h1>
		  <form onSubmit={this.handleSubmit}>
		   <input type ="text" placeholder ="enter name" onChange={this.handleChange} />
		    <button>submit</button>
			<button onClick={this.handleClick}>click me</button>
			<button onMouseOver={this.handleMouseover}>Hover over me</button>
			<p onCopy={this.handleCopy}>My first react app test</p>
		  </form>
       </div>
	  )
	}
}

export default App;
