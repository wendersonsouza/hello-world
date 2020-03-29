import React ,{Component} from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';



class  App extends Component {

  state = {
        persons: [
            { id: '1', name: 'Wenderson', age: 35 },
            { id: '2', name: 'Tabatha', age: 30 }
        ],
        showPerson: false,
        otherState: 'some other value',
        showCockpit: true
    }

     static getDerivedStateFromProps(props, state){
         console.log('[App.js] getDerivedStateFromProps')
         return state;
 }

    // componentWillMount(){
    //   console.log('[App.js] componentWillMount');
    // }
    
    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true;
    }
    componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
      return true;
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
            <Aux>
                <button onClick = {(()=>{
                  this.setState({showCockpit:false});
                })}
                >Remove Cockpit</button>
                { this.state.showCockpit ?
                <Cockpit showPerson={this.state.showPerson}
                         personsLength={this.state.persons.length}
                              clicked={this.togglePersonHandler}/>
                : null}
              {persons}
            </Aux>
      )};

  }

export default withClass(App,classes.App);


