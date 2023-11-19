import React from 'react'
import options from './options'

export class Button extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { decision: undefined }
  }

  handleClick () {
    const decision = options[Math.floor(Math.random() * options.length)]
    this.setState({ decision })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Help me decide</button>
        <div>{this.state.decision}</div>
      </div>
    )
  }
}
