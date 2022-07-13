import React, { Component } from 'react'

export class Emi extends Component {

    state = {
        loanAmount:'',
        interest:'',
        periodInYears:'',
        periodInMonths:'',
        totalMonths:'',
        emi:'',
        totalAmountToBePaid:'',
        totalInterest:'',
        text:''
    }

    inputLoanHandler =(event)=>{
        event.target.parentElement.childNodes[0].childNodes[0].checked = true
        var inp = event.target.value
        this.setState({
            loanAmount:inp
        })
    }
    interestLoanHandler =(event)=>{
        event.target.parentElement.childNodes[0].childNodes[0].checked = true
        var inp = event.target.value
        this.setState({
            interest:inp
        })
    }
    periodYearsLoanHandler =(event)=>{
        event.target.parentElement.parentElement.childNodes[0].childNodes[0].checked = true
        var inp = event.target.value
        var total = Number(inp*12)
        this.setState({
            periodInYears:inp,
            totalMonths:total
        })
    }
    periodMonthsLoanHandler =(event)=>{
        event.target.parentElement.parentElement.childNodes[0].childNodes[0].checked = true
        var inp = event.target.value
        var total = Number(inp)+Number(this.state.periodInYears*12)
        // alert(total)
        this.setState({
            periodInMonths:inp,
            totalMonths:total
        })
    }
    emiHandler =(event)=>{
        if(this.state.loanAmount==='' || this.state.interest===''){
            alert('enter empty field')
            return 
        }
        if(this.state.periodInMonths==='' && this.state.periodInYears===''){
            alert('enter tenure of loan')
            return
        }
        document.querySelector('.em').childNodes[0].childNodes[0].checked = true
        var btnval = event.target.innerText
        var emi = (this.state.loanAmount*(this.state.interest/1200))*(Math.pow(1+(this.state.interest/1200),Number(this.state.totalMonths))/((Math.pow(1+(this.state.interest/1200),Number(this.state.totalMonths)))-1))
        // alert(emi)
        emi = emi.toFixed(2)
        var total_payment = emi*this.state.totalMonths
        var total_interest = total_payment - this.state.loanAmount
        total_payment = total_payment.toFixed(2)
        total_interest = total_interest.toFixed(2)
        this.setState({
            emi:emi,
            totalAmountToBePaid:total_payment,
            totalInterest:total_interest,
            text:btnval
        })
    }
    resetHandler =(event)=>{
        document.querySelector('.em').childNodes[0].childNodes[0].checked = false
        var btnval = event.target.innerText
        this.setState({
            loanAmount:'',
            interest:'',
            periodInYears:'',
            periodInMonths:'',
            totalMonths:'',
            emi:'',
            totalAmountToBePaid:'',
            totalInterest:'',
            text:btnval
        })
    }
    detailHandler = (event)=>{
        if(this.state.emi===''){
            alert('first calculate emi to get details')
            return
        }
        var btnval = event.target.innerText
        this.setState({
            text:btnval
        })
    }
  render() {
    if(this.state.text==='DETAILS')
    return (
        <div className='inputbtn'>
        <form className='input'>
         <br />
         <br />
         <p className='item'>
          <label htmlFor='a'><input type='radio'/>Loan Amount:</label>
          <input id='a' type='number' value={this.state.loanAmount} onChange={this.inputLoanHandler}/>
         </p>
         <br />
         <p className='item'>
          <label htmlFor='b'><input type='radio'/>Interest%</label>
          <input id='b' type='number' value={this.state.interest} onChange={this.interestLoanHandler}/>
         </p>
         <br />
         <p className='item'>
          <label htmlFor='c d'><input type='radio'/>Period</label>
          <p className='inp2'>
          <input id='c' type='number' placeholder='years' value={this.state.periodInYears} onChange={this.periodYearsLoanHandler}/>
          <input id='d' type='number' placeholder='months' value={this.state.periodInMonths} onChange={this.periodMonthsLoanHandler}/>
          </p>
         </p>
         <br />
         <p className='item em'>
            <label><input type='radio'/>Emi</label>
            <input type='number' value={this.state.emi}/>
         </p>
         </form>
         <div className='button'>
          <button onClick={this.emiHandler}>CALCULATE</button>
          <button onClick={this.resetHandler}>RESET</button>
          <button onClick={this.detailHandler}>DETAILS</button>
         </div>
     <table>
      <tr>
        <td>Monthly EMI</td>
        <td>{this.state.emi}</td>
      </tr>
      <tr>
      <td>Total Interest</td>
        <td>{this.state.totalInterest}</td>
      </tr>
      <tr>
      <td>Total Payment</td>
        <td>{this.state.totalAmountToBePaid}</td>
      </tr>
     </table>
      </div>
    )
    if(this.state.text==='' || this.state.text==='CALCULATE' || this.state.text==='RESET')
    return(
        <div className='inputbtn'>
    <form className='input'>
     <br />
     <br />
     <p className='item'>
      <label htmlFor='a'><input type='radio' name='lan'/>Loan Amount:</label>
      <input id='a' type='number'  value={this.state.loanAmount} onChange={this.inputLoanHandler}/>
     </p>
     <br />
     <p className='item'>
      <label htmlFor='b'><input type='radio' name='lan'/>Interest%</label>
      <input id='b' type='number' value={this.state.interest} onChange={this.interestLoanHandler}/>
     </p>
     <br />
     <p className='item'>
      <label htmlFor='c d'><input type='radio' name='lan'/>Period</label>
      <p className='inp2'>
      <input id='c' type='number' placeholder='years' value={this.state.periodInYears} onChange={this.periodYearsLoanHandler}/>
      <input id='d' type='number' placeholder='months' value={this.state.periodInMonths} onChange={this.periodMonthsLoanHandler}/>
      </p>
     </p>
     <br />
     <p className='item em'>
        <label><input type='radio' name='lan'/>Emi</label>
        <input type='number' value={this.state.emi}/>
     </p>
     </form>
     <div className='button'>
      <button onClick={this.emiHandler}>CALCULATE</button>
      <button onClick={this.resetHandler}>RESET</button>
      <button onClick={this.detailHandler}>DETAILS</button>
     </div>
     </div>
    )
  }
}

export default Emi