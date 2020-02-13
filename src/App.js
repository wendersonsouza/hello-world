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

    switchHandlerName = (newName) =>{
        console.log('Was clicked');

    this.setState({
        persons:[
               {name: newName, age: 35 },
               {name: 'Tabatha Regina', age: 30 }
           ]
           });
    }

    nameChangedHandler = (event)=>{

      this.setState({
        persons:[
               {name: 'Wenderson', age: 35 },
               {name: event.target.value, age: 30 }
           ]
           });
    }
    render(){
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      return (
        <div className="App">
          <h1> Hi , I am react App</h1>
          <p> This really workinbg </p>
          <button 
          style={style}
          onClick={this.switchHandlerName.bind(this, 'Wenderson Souza')}> Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchHandlerName}> My hobbies: playing football</Person>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}/>
        </div>
      )};

  }

export default App;


