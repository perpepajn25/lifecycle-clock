import React, { Component } from 'react'

class ClockSelector extends Component {
  render () {
    return (
      <div>
        {this.props.digital ? (
          <button onClick={this.props.onToggleClock}>
            Switch To Analog
          </button>)
        : (
          <button onClick={this.props.onToggleClock}>
            Switch To Digital
          </button>
        )}
      </div>
    )
  }
}

export default ClockSelector
