import React, { Component } from 'react';

class userInput extends Component {
    state = {  }

    changeUserName = () =>{
        var n1="";
        this.setState({n1: n1=this.inputId.value})
    }

    render() { 
        return ( 
            <div>
                <input id="inputId" onKeyUp={() => this.changeUserName }></input>
            </div>
         );
    }
}
 
export default userInput;