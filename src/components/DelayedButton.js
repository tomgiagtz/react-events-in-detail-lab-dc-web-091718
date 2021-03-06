import React from "react"

class DelayedButton extends React.Component {
  render() {
    return <button onClick={this.handleClick}>Delay</button>
  }

  handleClick = event => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }
}

export default DelayedButton
