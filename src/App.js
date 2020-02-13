import React ,{Component} from 'react';
import './App.css';
import Person from './Person.js'


class  App extends Component {

  state = {
        persons: [
            { id: '1', name: 'Wenderson', age: 35 },
            { id: '2', name: 'Tabatha', age: 30 }
        ],
        showPerson: false
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

    nameChangedHandler = (event, id )=> {
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
      });

      const person = {...this.state.persons[personIndex] };
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons:persons });
    }

    togglePersonHandler = () =>{
      const doesShow = this.state.showPerson;
      this.setState({
        showPerson : !doesShow
      });
    }

    deletePersonHandler = (personIndex) =>{
      //const persons = this.state.persons.slice;
      const persons = [...this.state.persons];
      persons.slice(personIndex, 1);
      this.setState({persons: persons});
    }

    render(){
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      let persons = null;
      if (this.state.showPerson){
          persons= (
            <div>
              {this.state.persons.map((person,index) => {
                    return <Person
                            click={() => this.deletePersonHandler(index)} 
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event)=> this.nameChangedHandler(event, person.id)}/>
                })}
            </div> 
          );
        } 

      return (
        <div className="App">
          <h1> Hi , I am react App</h1>
          <p> This really workinbg </p>
          {/* <button 
          style={style}
          onClick={this.switchHandlerName.bind(this, 'Wenderson Souza')}> Switch Name</button> */}
          <button 
          style={style}
          onClick={this.togglePersonHandler}> Toggle Persons</button>
          {persons}
        </div>
      )};

  }

export default App;


