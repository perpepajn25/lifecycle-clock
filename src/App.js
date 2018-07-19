import React, { Component } from 'react';
import './App.css';
import AnalogClock from './components/AnalogClock'
import ClockSelector from './components/ClockSelector'
import DigitalClock from './components/DigitalClock'

class App extends Component {
  state = {
    digital: true
  }

  handleClockTypeChange = () => {
    this.setState({
      digital: !this.state.digital
    })
  }

  render() {
    const { digital } = this.state
    return (
      <div id="app">
        <ClockSelector digital={this.state.digital} onToggleClock={this.handleClockTypeChange}/>
        {digital ? <DigitalClock /> : <AnalogClock />}
      </div>
    );
  }
}

export default App;
