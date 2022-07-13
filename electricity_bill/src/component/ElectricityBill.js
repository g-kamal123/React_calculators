import React, { Component } from 'react'
import Print from './Print'

export class ElectricityBill extends Component {
    state = {
        units:''
    }

    inputHandler =(event)=>{
        var inp = event.target.value
        this.setState({
            units:inp
        })
    }

    // billHandler =(event)=>{
    //     var unit = this.state.units
    //     var result
    //     if(unit<=50)
    //     result = unit*3.50
    // }
  render() {
    return (
      <div>
        <h2>Electricity Bill</h2>
        <div>
        <label>Units:</label>
        <input type='number' value={this.state.units} onChange={this.inputHandler}/>
        </div>
        {/* <button onClick={this.billHandler}>Calculate Bill</button> */}
        <Print unit={this.state.units}/>
      </div>
    )
  }
}

export default ElectricityBill