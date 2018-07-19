import React, { Component } from 'react'

class DigitalClock extends Component {
  constructor () {
    super ()

  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }

  componentDidUnmount () {

  }


  render () {
    const time = new Date()
    return (
      <div>
        <h2>

          {time.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
