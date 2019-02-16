import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0,
    isOn: false
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  toggleColor = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }))
  }

  render() {
    const { count, isOn } = this.state

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
      </>
    )
  }
}

export default App
