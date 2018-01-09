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

  render(){
    return(
      <button className="bitrate" onClick={this.handleClick} >Bitrate</button>
    )
  }
}

export default YouTubeDebugger
