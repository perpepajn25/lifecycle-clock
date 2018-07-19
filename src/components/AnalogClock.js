import React, { Component } from 'react'

class AnalogClock extends Component {
  render () {
    return (
      <div className='clock-container'>
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnalogClock
