import React, { Component } from 'react';

export default class Forecast extends Component {
    render() {
        return (
       <div>
           {this.props.forecast}
       </div>
    );
  }
} 