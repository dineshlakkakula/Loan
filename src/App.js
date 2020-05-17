import React, { PureComponent } from 'react'
import API from './Services/API'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      money: localStorage.length>0 ? localStorage.getItem("money") : 500,
      months: localStorage.length>0 ? localStorage.getItem("months") : 6,
      intrest: localStorage.length>0 ? localStorage.getItem("intrestrate") : 0.25,
      monthlypayment: localStorage.length>0 ? localStorage.getItem("monthlypayment") :93,
    }


    this.changeMoney = this.changeMoney.bind(this);
    this.changeTime = this.changeTime.bind(this);
    
  }


  async componentDidUpdate() {
    let getData = await API.getData(this.state.money, this.state.months);
    console.log(localStorage.length) 
    this.setState({
      intrest: getData.interestRate,
      monthlypayment: getData.monthlyPayment.amount,
      principal: getData.principal.amount,
    })
    localStorage.setItem("monthlypayment",  getData.monthlyPayment.amount)
    localStorage.setItem("intrestrate", getData.interestRate)


  }
  changeMoney = () => {
    let moneyChanged = this.refs.money.value;
    this.setState({
      money: moneyChanged
    })
    localStorage.setItem("money",this.refs.money.value)


  }


  changeTime = (e) => {
    let timeChanged = this.refs.time.value;
    console.log(timeChanged)
    this.setState({
      months: timeChanged
    })
    localStorage.setItem("months",this.refs.time.value)

  }

  render() {
    console.log(this.state)

    return (
      <div>
                <h1 className="heading">LOAN INTEREST CALCULATOR</h1 >

      <div className="app">
      <div className="calculator">
        <div className="Sliders">
          <input className="first" value={this.state.money} type="range" min="500" max="5000" ref="money" onChange={this.changeMoney} />
          <h2 className="loan">Loan Amount  :{this.state.money}</h2>
        </div>

        <div className="Sliders">
          <input className="second" value={this.state.months} type="range" min="6" max="24" ref="time" onChange={this.changeTime} />
          <h2 className="month">Duration  :  {this.state.months} Months</h2>
        </div>
        <div className="values">
          <h2 className="total">Total payment to be done : {this.state.monthlypayment * this.state.months} ( {this.state.monthlypayment} $  X  {this.state.months} Months )</h2>
          <h2 className="total">Intrest Rate: {this.state.intrest} %</h2>
          <h2 className="total">Monthly Payment : {this.state.monthlypayment}  $</h2>
        </div>
      </div>
      </div>
      </div>

    )
  }
}

export default App