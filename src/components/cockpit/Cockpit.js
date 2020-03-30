import React, {useEffect, useRef} from  'react';
import classes from './Cockpit.css';

const Cockpit = (props) =>  {

const toggleBtnRef = useRef(null);

  useEffect (() =>{
    console.log('[Coockpit.js] useEffect');
    toggleBtnRef.current.click();

    //setTimeout(()=>{
    //  alert('Save data to cloud');
   // }, 1000)

    return (() =>{
      console.log('[Coockpit.js] clean up user for userEffect.');
    } )
  },[]);

  useEffect (() =>{

    console.log('[Coockpit.js] 2nd useEffect');
    return (() =>{
      console.log('[Coockpit.js] 2nd clean up user for userEffect.');
    } )

  });

      const  assignedClasses = [];
      let btnClass = '';

      if(props.showPerson){
      btnClass = classes.red;
      }
              if(props.personsLength >= 2){
                assignedClasses.push(classes.red);
              }
              if(props.personsLength >= 1){
                assignedClasses.push(classes.bold);
              }
      return (
      <div className={classes.Cockpit}>
          <h1> Hi , I am react App</h1>
          <p className={assignedClasses.join(' ')}> This really working </p>
          <button
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}> Toggle Persons</button>
          <button onClick={props.login}> Login </button>
      </div>

      )};

export default React.memo(Cockpit);