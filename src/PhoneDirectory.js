import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

    // Smart Component, it returns the AddSubscriber component
class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            subscribersList :[
                {
                    id :1,
                    name: "Shilpa Bhat",
                    phone: "8888888888"
                  },
                  {
                    id :2,
                    name: "Srishti Gupta",
                    phone: "999999999"
                  }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList  = this.state.subscribersList;  
        // Check the length
        if (subscribersList.length > 0) {   
            newSubscriber.id = subscribersList[subscribersList.length-1].id +1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList})
        console.log('PhoneDirectory');
        console.log(this.state.subscribersList);
    }

    render(){
        return (
            // Passing the function as a property(main logic to the dumb component)
            // <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>

            // Passing subscribersList as a property to dumb component ShowSubscribers
            <ShowSubscribers subscribersList = {this.state.subscribersList} />
        )
    }
}
export default PhoneDirectory;