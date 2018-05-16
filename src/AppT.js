import React, { Component } from 'react'

export class AppT extends Component {
  render() {
     
    return (
      <p>
        Hiiii {this.props.name} {this.props.phone}
      </p>
    )
  }
}

export default AppT
