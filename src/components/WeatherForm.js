import React, { Component } from 'react';
 
export default class Form extends Component {
    render() {
        return (
         <form onSubmit={ this.props.getWeather }>
           <input type="text" name="city" placeholder="enter city" />
             <select name="stateToSearch">
                <option>Select A State</option>
                  {this.props.stateName.map((statesList, i) => <option key={statesList[i]}> {statesList} </option>)}
             </select>
            <button type="submit">Get Weather</button>
         </form>
     );
   }
 } 