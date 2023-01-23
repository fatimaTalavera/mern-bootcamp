import React, { Component } from 'react';
import './personCard.css';


class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = { age: props.person.age };
    }

    increaseAge = () => {
        this.setState({age: this.state.age + 1});
    };

    render(){
        let {firstname, lastname, hairColor} = this.props.person;
        return(
            <div>
                <h1>{lastname}, {firstname}</h1>
                <p>age: {this.state.age}</p>
                <p>hair color: {hairColor}</p>
                <button className="birthday_btn" onClick={this.increaseAge}>Birsthday button for {firstname} {lastname}</button>
            </div>
        );
    }
}
export default PersonCard;