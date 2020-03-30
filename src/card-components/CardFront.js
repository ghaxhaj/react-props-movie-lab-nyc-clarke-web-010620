import React, { Component } from 'react';

export default class CardFront extends Component {


    // "./assets/poster-imgs/{this.props.poster}"
  

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
