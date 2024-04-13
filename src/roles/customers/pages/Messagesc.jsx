import React from 'react'
import './message.css'

const Messagesc = () => {
  return (
    <div>
      <div id="messaging-page">
        <div id="messages">
            <div className="message">
                <div className="sender">User 1</div>
                <div className="content"><input type="text" /></div>
            </div>
            <div className="message">
                <div className="sender">User 2</div>
                <div className="content"><input type="text" /></div>
            </div>
        </div>
        <div id="message-input">
            <input type="text" id="message-text" placeholder="Type your message here..." />
            <button id="send-button">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messagesc