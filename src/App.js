import React ,{Component} from 'react';
import './App.css';
import Radium , {StyleRoot}from 'radium';
import Person from './Person.js'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'


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
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color:'black'
        }
      };

      let persons = null;
      if (this.state.showPerson){
          persons= (
            <div>
              {this.state.persons.map((person,index) => {
                    return <ErrorBoundary key={person.id}>
                    
                              <Person
                                  click={() => this.deletePersonHandler(index)} 
                                  name={person.name} 
                                  age={person.age}
                                  key={person.id}
                                  changed={(event)=> this.nameChangedHandler(event, person.id)}/>
                        </ErrorBoundary>
                
                })}
            </div> 
          );

          style.backgroundColor = 'red';
          style[':hover'] ={
            backgroundColor: 'lightred',
            color:'black'
          }
        } 

        const  classes = [];
        if(this.state.persons.length >= 2){
          classes.push('red')
        }
        if(this.state.persons.length >= 1){
          classes.push('bold')
        }

      return (
        <StyleRoot>
            <div className="App">
              <h1> Hi , I am react App</h1>
              <p className={classes.join(' ')}> This really workinbg </p>
              {/* <button 
              style={style}
              onClick={this.switchHandlerName.bind(this, 'Wenderson Souza')}> Switch Name</button> */}
              <button 
              style={style}
              onClick={this.togglePersonHandler}> Toggle Persons</button>
              {persons}
            </div>
        </StyleRoot> 
      )};

  }

export default Radium(App);


