// Write your code here
// Write your code here

import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  StopButton = () => {
    clearInterval(this.timerId)
  }

  restartButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const displayTime = `${this.renderMinutes()}: ${this.renderSeconds()}`
    return (
      <div className="totalContainer">
        <h1>Stopwatch</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <p>Timer</p>
        </div>
        <div>
          <p>{displayTime}</p>
        </div>
        <div>
          <button type="button" onClick={this.startButton}>
            Start
          </button>
          <button type="button" onClick={this.StopButton}>
            Stop
          </button>
          <button type="button" onClick={this.restartButton}>
            Reset
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
            alt="stopwatch"
          />
        </div>
      </div>
    )
  }
}

export default StopWatch
