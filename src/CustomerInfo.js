import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import './CustomerInfo.css'

export default class CustomerInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  close () {
    this.setState({ showModal: false });
  }
  open () {
    this.setState({ showModal: true });
  }
  render () {
    const { name, companyName } = this.props
    return (
      <div onClick={this.open} className='Customer-wrapper'>
        <div className='Customer-info-wrapper'>
          {name === ' ' ? (
            <h2 className='Customer-company-fallback'>{companyName}</h2>
          ) : (
            <div><h2 className='Customer-name'>{name}</h2><h3 className='Customer-company'>{companyName}</h3></div>
          )}
        </div>
        <span className='Customer-expand-arrow'>&#10095;</span>
        <Modal className='Modal-wrapper' show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title className='Modal-title'>
              {companyName}
            </Modal.Title>
            <Modal.Footer className='Modal-close' onClick={this.close}>Close</Modal.Footer>
          </Modal.Header>
        </Modal>
      </div>
    )
  }
}
