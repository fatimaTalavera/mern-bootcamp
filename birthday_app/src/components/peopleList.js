import React, { Component } from 'react';
import PersonCard from "./personCard"


class PeopleList extends Component{
    render(){
        const {people} = this.props;

        return(
            <div>
                {people.map((p) => <PersonCard person={p}/>)}
            </div>
        );
    }
}
export default PeopleList;
