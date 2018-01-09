// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
  constructor(){
    super()

    this.state ={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = (setting) => {
    setState({
      this.state.settings: Object.assign({}, this.state.settings, {
        `${setting}`: 12,
      })
    })
  }

  render(){
    return(
      <button className="bitrate" onClick={this.handleClick('bitrate')} >Bitrate</button>
      <button className="resolution" onClick={this.handleClick('resolution')} >Bitrate</button>
    )
  }
}

export default YouTubeDebugger
