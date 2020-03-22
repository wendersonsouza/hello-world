import React ,{Component} from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';



class  App extends Component {

  state = {
        persons: [
            { id: '1', name: 'Wenderson', age: 35 },
            { id: '2', name: 'Tabatha', age: 30 }
        ],
        showPerson: false
    }

    nameChangedHandler = (event, id )=> {
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
      });

      const person = {...this.state.persons[personIndex] };
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons : persons})

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

      let persons = null;
      if (this.state.showPerson){
          persons =  <Persons persons={this.state.persons}
                              changed={this.nameChangedHandler}
                              clicked={this.deletePersonHandler} />;
        }
      return (
            <div className={classes.App}>
                <Cockpit showPerson={this.state.showPerson}
                              persons={this.state.persons}
                              clicked={this.togglePersonHandler}/>
              {persons}
            </div>
      )};

  }

export default App;


