import React from  'react';
import classes from './Cockpit.css';

const cockpit = (props) =>  {

                            const  assignedClasses = [];
                            let btnClass = '';

                            if(props.showPerson){
                            btnClass = classes.red;
                            }
                                    if(props.persons.length >= 2){
                                      assignedClasses.push(classes.red);
                                    }
                                    if(props.persons.length >= 1){
                                      assignedClasses.push(classes.bold);
                                    }
                            return (
                            <div className={classes.Cockpit}>
                                <h1> Hi , I am react App</h1>
                               <p className={assignedClasses.join(' ')}> This really working </p>
                                <button
                                className={btnClass}
                                onClick={props.clicked}> Toggle Persons</button>
                            </div>

                            )};








export default cockpit;