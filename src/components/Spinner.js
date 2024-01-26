import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center align-item-center' style={{marginTop : "30vh"}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
