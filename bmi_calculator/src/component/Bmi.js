import React, { Component } from 'react'
import Print from './Print'

export class Bmi extends Component {
    state = {
        radioInput:'',
        weightInput:'',
        heightInput:'',
        weightPlaceHolder:'',
        heightPlaceHolder:'',
        result:''
    }
    radioButtonHandler = (event)=>{
        var inp = event.target.value
        // alert(inp)
        if(inp==='kg'){
            var hplace = 'Enter height in meter'
            var wplace = 'Enter weight in kg'
        }
        if(inp==='pound'){
            hplace = 'Enter height in inches'
            wplace = 'Enter weight in pounds'
        }
        this.setState({
            radioInput:inp,
            weightPlaceHolder:wplace,
            heightPlaceHolder:hplace
        })
    }
    inputWeightHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            weightInput:inp
        })
    }
    inputHeightHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            heightInput:inp
        })
    }
    bmiHandler = (event)=>{
        if(this.state.radioInput===''){
            alert('select one of weights')
            return
        }
        if(this.state.weightInput===''){
            alert('Enter weight')
            return
        }if(this.state.heightInput===''){
            alert('Enter height')
            return
        }
        var bmi = this.state.weightInput/Math.pow(this.state.heightInput,2)
        if(this.state.radioInput==='pound')
        bmi = bmi*703
        bmi = bmi.toFixed(1)
        // alert(bmi)
        this.setState({
            result:bmi
        })
    }
  render() {
    return (
      <div>
        <div className='radio'>
        <input type='radio' name='weight' value='kg' onClick={this.radioButtonHandler}/>
        <label>Weight in KG</label>
        <input type='radio' name='weight' value='pound' onClick={this.radioButtonHandler}/>
        <label>Weight in Pound</label>
        </div>
        <div className='input'>
        <div>
        <label>Enter weight:</label>
        <input type='number' placeholder={this.state.weightPlaceHolder} onChange={this.inputWeightHandler} value={this.state.weightInput}/>
        </div>
        <div>
        <label>Enter height:</label>
        <input type='number' placeholder={this.state.heightPlaceHolder}
        onChange={this.inputHeightHandler} value={this.state.heightInput}/>
        </div>
        </div>
        <button onClick={this.bmiHandler}>Check your BMI</button>
        <Print bmi={this.state.result}/>
      </div>
    )
  }
}

export default Bmi