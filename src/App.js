import React, { Component } from 'react';

import AnalogClock from './components/AnalogClock'
import ClockSelector from './components/ClockSelector'
import DigitalClock from './components/DigitalClock'

class App extends Component {
  constructor () {
    super()

    this.state = {
      digital: true
    }
  }

  handleButtonClick = () => {
    this.setState({
      digital: !this.state.digital
    })
  }

  render() {
    return (
      <div id='app'>
        <ClockSelector digital={this.state.digital} onToggleClock={this.handleButtonClick}/>
        {this.state.digital ? <DigitalClock /> : <AnalogClock /> }
      </div>
    );
  }
}

export default App;
