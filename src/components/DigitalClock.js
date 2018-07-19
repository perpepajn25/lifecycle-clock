import React, { Component } from 'react'

class DigitalClock extends Component {
  constructor () {
    super ()
    console.log('in the constructor')
    this.state = {
      time: new Date()
    }

    // BAD
    // this.setState({
    //   time: new Date ()
    // })
  }

  componentDidMount () {
    console.log('in component did mount')
    this.tick = setInterval( () => {
        // console.log('in my set inteval')
        this.setState({
          time: new Date()
        })
      } , 1000)
  }

  componentDidUpdate () {
    console.log('component did update')
  }


  componentWillUnmount () {
    // component is no longer rendered on the page
    console.log('in component did unmount')

    clearInterval(this.tick)
  }

  render () {
    console.log('in the render')
    // EVERYTHING WILL BREAK BAD
    // this.setState({
    //   time: new Date ()
    // })
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.time.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
