import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        }
    }
// What happens here is when we call the event handler(inputChangedHandler) with onChange, whatever we write
// something in the input field, it is passed onto this inputChangedHandler function


    inputChangedHandler = (e)=>{
        const state = this.state;  // Assigning the state to a constant
        state[e.target.name] = e.target.value;  // This gets us the value of the changed input box in our state
        this.setState(state);       // Setting the new state
        console.log(this.state);
    }

    onSubmitHandler = (e) => {
        e.preventDefault(); // Prevent the default loading of page when form is submitted
        // Passing the function - addSubscriberHandler as a property through props in PhoneDirectory
        // whenever the user clicks on the Add button
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0, name:'', phone:''});
    }

    render(){

        const{name,phone} = this.state; 
        return(
            <div>
                <Header heading = "Add Subscriber"></Header>
                <div className = "component-body-container">
                    <button className="custom-btn">Back</button>
                </div>
                <form className="subscriber-form" onSubmit={this.onSubmitHandler.bind(this)}>
                    <label htmlFor="name" className="label-control">Name:</label><br />
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br /><br />
                    <label htmlFor="phone" className="label-control">Phone:</label><br />
                    <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br /><br />
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
                        <span className="subscriber-info">Name: {name}</span><br />
                        <span className="subscriber-info">Phone: {phone}</span>
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>

        )
    }
}

export default AddSubscriber;