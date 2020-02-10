import React ,{Component} from 'react';
import './App.css';
import Person from './Person.js'

class  App extends Component {

  state = {
        persons: [
            {name: 'Wenderson', age: 35 },
            {name: 'Tabatha', age: 30 }
        ]
    }

    switchHandlerName = () =>{
        console.log('Was clicked');

    this.setState({
        persons:[
               {name: 'Wenderson Souza', age: 35 },
               {name: 'Tabatha Regina', age: 30 }
           ]
           });
    }


    render(){
      return (
        <div className="App">
          <h1> Hi , I am react App</h1>
          <p> This really workinbg </p>
          <button onClick={this.switchHandlerName}> Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies: playing football</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        </div>
      )};

  }

export default App;


