import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import 'font-awesome/css/font-awesome.css'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { Div } from '../common'
import logo from '../../assets/images/logo_black.png'
import HeaderWrapper from './header.style'

class Header extends Component {
  state = {
    warningModalShow: false
  }

  goBack = () => {
    const { selectedChildren } = this.props;
    console.log('go back', this.props.location.pathname)
    this.props.location.pathname === '/questionnaires' && selectedChildren !== null ? (
      this.handleOpenModal()
    ) : (
      this.props.history.push('/children')
    ) 
  }

  handleContinue = () => {
    this.props.history.push('/children')
  }

  handleOpenModal = () => {
    this.setState({ warningModalShow: true })
  }

  handleCloseModal = () => {
    this.setState({ warningModalShow: false })
  }

  render() {
    const { selectedChildren } = this.props

    return (
      <HeaderWrapper>
        <Div className="header" direction="column" justifyContent="center" alignItems="center">
          <a className="btn-back" onClick={this.goBack}>
            <FontAwesome name="angle-left" size="2x" />
          </a>
          {selectedChildren ? (
            <p>{selectedChildren.name}</p>
          ) : (
            <p style={{ fontSize: '0.9em' }}>Children Not Selected</p>
          )}
        </Div>
        <Modal isOpen={this.state.warningModalShow} contentLabel="Minimal Modal Example" className="modal warningModal">
          <div className="modal-header">
            <p>Warning</p>
          </div>
          <div className="modal-content">
            <p>You will lose progress <br/> Are you ok to continue?</p>
          </div>
          <div className="modal-footer">
            <div className="lose-modal-buttons">
              <a className="btn-cancel" onClick={this.handleCloseModal}>Cancel</a>
              <a className="btn-continue" onClick={this.handleContinue}>Continue</a>
            </div>
          </div>
        </Modal>
      </HeaderWrapper>
    )
  }
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  {}
)(withRouter(Header))
