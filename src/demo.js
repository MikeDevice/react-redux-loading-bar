import React from 'react'
import { LoadingBar } from 'react-redux-loading-bar'

class Demo extends React.Component {
  state = {
    loading: 1,
  }

  render() {
    if (this.state.loading === 1) {
      this.setState({loading: 0})
    }

    return (
      <div className="center">
        <LoadingBar loading={this.state.loading} />
      </div>
    )
  }
}

export default Demo
