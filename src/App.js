import React, { Component } from 'react';
import './App.css';
import AnalogClock from './components/AnalogClock'
import ClockSelector from './components/ClockSelector'
import DigitalClock from './components/DigitalClock'

class App extends Component {
  constructor () {
    super()

  }


  render() {
    return (
      <div>
        {/* <ClockSelector digital={this.state.digital} onToggleClock={this.handleClockTypeChange}/> */}
        <DigitalClock />
        {/* {digital ? <DigitalClock /> : <AnalogClock />} */}
      </div>
    );
  }
}

export default App;
