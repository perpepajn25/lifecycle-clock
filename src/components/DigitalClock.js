import React, { Component } from 'react'

class DigitalClock extends Component {
  render () {
    const time = new Date()
    return (
      <div className="app-children">
        <h2 id="digital">
          {time.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
