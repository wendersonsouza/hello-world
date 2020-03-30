import React, {Component} from 'react';
import classes from './Person.css';
import Aux from  '../../../hoc/aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{

constructor(props){
super(props);
this.inputElementRef = React.createRef();

}

componentDiMount(){

    this.inputElementRef.current.focus();
}

    render(){
            return (
                <Aux>
                    {this.props.isAuth ? <p> Authenticated </p> : <p>  Please Log </p> }
                    <p onClick={this.props.click}>  I am {this.props.name} and I am {this.props.age} years old. </p>
                    <p> {this.props.children}</p>
                    <input type="text"
                    ref={this.inputElementRef}
                           onChange={this.props.changed}
                           value={this.props.name}/>
                 </Aux>
            );
            }
}

Person.propType = {
click: PropTypes.func,
name: PropTypes.string,
age: PropTypes.number,
changed: PropTypes.func
}

export default withClass(Person, classes.Person);
