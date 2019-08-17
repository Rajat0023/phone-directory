import React, { Component } from 'react';
import Header from './Header';
import './App.css'


  // let subscribers = [
  //   {
  //     id :1,
  //     name: "Shilpa Bhat",
  //     phone: "8888888888"
  //   },
  //   {
  //     id :2,
  //     name: "Srishti Gupta",
  //     phone: "999999999"
  //   }
  // ]

  // The array which we hardcoded above will be a part of the state now
  class App extends Component {

    constructor(){
      super();
      this.state = {            // Initialize the state
        subscribersListToShow: []
      }
    }

    render() {

return (
    <div>
      <Header heading="Phone Directory"/>
      <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>

        {
          this.state.subscribersListToShow.map(sub => {
            return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <div className="grid-item btn-container">
            <button className="custom-btn delete-btn">Delete</button>
            </div>
            </div>
          }
          )
        }
      </div>
    );
  }
}
export default App;
