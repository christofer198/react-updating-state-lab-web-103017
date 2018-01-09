// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

  constructor(){

    super()
    
    this.state = {
      timesClicked: 0
    }
  }

  updateClicked = () => {
    setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (
      <label>{this.state.timesClicked}</label>
      <button onClick={this.updateClicked} />
    )
  }
}

export default DigitalClicker
