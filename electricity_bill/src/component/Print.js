import React, { Component } from 'react'

export class Print extends Component {
  render() {
    if(this.props.unit<=50)
    return (
      <div>
        <label>Your Bill:</label>
        <h2>{(this.props.unit*3.50).toFixed(2)}</h2>
      </div>
    )
    if(this.props.unit>50 && this.props.unit<=150)
    return (
      <div>
        <label>Your Bill:</label>
        <h2>{((50*3.50)+(this.props.unit-50)*4).toFixed(2)}</h2>
      </div>
    )
    if(this.props.unit>150 && this.props.unit<=250)
    return (
      <div>
        <label>Your Bill:</label>
        <h2>{((50*3.50)+(100*4)+(this.props.unit-150)*5.20).toFixed(2)}</h2>
      </div>
    )
    if(this.props.unit>250)
    return (
      <div>
        <label>Your Bill:</label>
        <h2>{((50*3.50)+(100*4)+(100*5.20)+(this.props.unit-250)*6.50).toFixed(2)}</h2>
      </div>
    )
  }
}

export default Print