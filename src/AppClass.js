import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  }

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times!`
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentDidUpdate() {
    document.title = `You have clicked ${this.state.count} times!`
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  toggleColor = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }))
  }

  render() {
    const { count, isOn, x, y } = this.state

    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
          I was clicked {count} times
        </button>

        <h2>Toggle Color</h2>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: isOn ? 'grey' : 'yellow'
          }}
          onClick={this.toggleColor}
        />

        <h2>Mouse Position</h2>
        <p>X position : {x}</p>
        <p>Y position : {y}</p>
      </>
    )
  }
}

export default App
