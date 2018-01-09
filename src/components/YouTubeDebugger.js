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

  handleClick = (setting, arg) => {
    setState({
      this.state.settings: Object.assign({}, this.state.settings, {
        `${setting}`: `${arg}`,
      })
    })
  }

  render(){
    return(
      <button className="bitrate" onClick={this.handleClick('bitrate', '12')} >Bitrate</button>
      <button className="resolution" onClick={this.handleClick('resolution', '720p')} >Bitrate</button>
    )
  }
}

export default YouTubeDebugger
