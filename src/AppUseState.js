import React ,{useState} from 'react';
import './App.css';
import Person from './Person.js'

const AppUseState = props =>{
     const [personState, setPersonState] = useState({
        persons: [
                    {name: 'Wenderson', age: 35 },
                    {name: 'Tabatha', age: 30 }
                ]
     });

    const [otherState , setOtherState] = useState('Some other value');
    console.log(personState,otherState);

    const switchHandlerName = () =>{
              setPersonState({
                  persons:[
                         {name: 'Wenderson Souza', age: 35 },
                         {name: 'Tabatha Regina', age: 30 }
                     ]
                     });

              setOtherState('');
          };



      return (
        <div className="App">
          <h1> Hi , I am react App</h1>
          <p> This really workinbg </p>
          <button onClick={switchHandlerName}> Switch Name</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}> My hobbies: playing football</Person>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        </div>
      );
  }

export default AppUseState;




