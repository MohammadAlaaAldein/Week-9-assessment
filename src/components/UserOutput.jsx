import React, { Component } from 'react';
import UserInput from "./UserInput"


class userOutput extends Component {
    state = {

        paragraph1: "Username is "
     }
  
  
    render() { 
        return (
            <div> 
                <p> {this.state.paragraph1}</p>
                <p> {this.state.paragraph1}</p>
                <p> Username is : Max </p>
            </div>
         );
    }
}
 
export default userOutput;