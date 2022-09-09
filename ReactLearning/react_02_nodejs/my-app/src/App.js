import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(){
		super();
			
			this.state =
			{
				name: "James",
				surname: "jason"
			}
			
			this.handleChange = (e) => {
				this.setState({
					name:e.target.value
				})
			}
	}
	render(){
	  return(
	   <div className="App">
         <h1>My first name is {this.state.name}</h1>
		  <form>
		   <input type ="text" placeholder ="entr name" onChange={this.handleChange}/>
		    <button>submit</button>
		  </form>
       </div>
	  )
	}
}

export default App;
