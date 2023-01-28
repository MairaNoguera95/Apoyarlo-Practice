import { Component } from "react";
class PersonCard extends Component {
    render() { 
        const { firstName, lastName, Age, hairColor} = this.props;
        return (
        <>
        <h1>{firstName} {lastName}</h1>
        <p>{Age}</p>
        <p>{hairColor}</p>
       
        </>);
    }
}
 
export default PersonCard;