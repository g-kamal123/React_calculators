import React, { Component } from 'react'

export class Print extends Component {
  render() {
    if(this.props.bmi==='')
    return(
        <div></div>
    )
    if(this.props.bmi<18.5)
    return (
      <div>
        <div>
        <label>BMI:</label>
        <h2>{this.props.bmi}</h2>
        </div>
        <div>
        <label>Weight Status:</label>
        <h2>Under Weight</h2>
        </div>
      </div>
    )
    if(this.props.bmi>=18.5 && this.props.bmi<=24.9)
    return (
        <div>
        <div>
        <label>BMI:</label>
        <h2>{this.props.bmi}</h2>
        </div>
        <div>
        <label>Weight Status:</label>
        <h2>Healthy Weight</h2>
        </div>
      </div>
    )
    if(this.props.bmi>=25.0 && this.props.bmi<=29.9)
    return (
        <div>
        <div>
        <label>BMI:</label>
        <h2>{this.props.bmi}</h2>
        </div>
        <div>
        <label>Weight Status:</label>
        <h2>OverWeight</h2>
        </div>
      </div>
    )
    if(this.props.bmi>=30.0)
    return (
        <div>
        <div>
        <label>BMI:</label>
        <h2>{this.props.bmi}</h2>
        </div>
        <div>
        <label>Weight Status:</label>
        <h2>Obesity</h2>
        </div>
      </div>
    )
  }
}

export default Print