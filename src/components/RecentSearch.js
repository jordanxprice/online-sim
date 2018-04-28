import React, { Component } from 'react';
import axios from 'axios'
 
export default class RecentSearches extends Component {
    render(props) {
        return (
        <div>
            {this.props.places.map(places => <p key={places.name} value={places.name}> {places.name} </p>)}
        </div>
     );
   }
 } 