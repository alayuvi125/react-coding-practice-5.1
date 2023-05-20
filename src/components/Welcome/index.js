// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: 'Subscribe'}

  clicked = () => {
    const {isSubscribed} = this.state
    this.setState(() => ({
      isSubscribed: isSubscribed === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank You! Happy Learning</p>
        <div>
          <button className="button" type="button" onClick={this.clicked}>
            {isSubscribed}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
