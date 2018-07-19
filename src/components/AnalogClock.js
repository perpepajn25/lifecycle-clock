import React, { Component } from 'react'

class AnalogClock extends Component {
  render () {
    return (
      <div className='clock-container'>
        <div class="clock">
          <div class="clock-face">
            <div class="hand hour-hand"></div>
            <div class="hand min-hand"></div>
            <div class="hand second-hand"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnalogClock
