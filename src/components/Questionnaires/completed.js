import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import QuestionnaireCompletedWrapper from './completed.style';
import { Div } from '../common';
import appActions from '../../redux/app/actions';
import authActions from '../../redux/auth/actions';
import _ from 'lodash';

const { get_assessments, get_children, select_assessment, continue_assessments } = appActions;
const { logout } = authActions;

class QuestionnaireCompleted extends Component {
  constructor() {
    super();

    this.state = {
      remainingAssessmentNumber: 0
    };
  }

  componentDidMount() {
    this.props.get_children();
  }
  
  componentWillReceiveProps(nextProps) {
    const { selectedChildren } = this.props;

    let completedAssessment = _.find(nextProps.children, { id: selectedChildren.id});

    this.setState({
      remainingAssessmentNumber: completedAssessment.outstanding_assessments_size
    });
  }

  logout = () => {
    console.log('log out');
    this.props.logout();
  }

  continueAssessment = () => {
    console.log('continue assessment');
    this.props.continue_assessments();
  }

	render() {
		const { selectedChildren, questionnaires, children } = this.props;
    const { remainingAssessmentNumber } = this.state;

		return (
			<QuestionnaireCompletedWrapper>
				<Div className="header" direction="column" justifyContent="center" alignItems="center">
					<p>{selectedChildren.name}</p>
					<img src={logo} alt="logo" className="logo"/>
				</Div>
        <Div className="content" direction="column" alignItems="center">
          <h2>{questionnaires.title}</h2>
          <h2>Completed</h2>
          <button className="btn btn-continue" onClick={this.continueAssessment}>
            Continue
            <p className="due-notification">{remainingAssessmentNumber}</p>
          </button>
          <button className="btn btn-logout" onClick={this.logout}>
            Log Out
          </button>
        </Div>
			</QuestionnaireCompletedWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { get_assessments, get_children, select_assessment, continue_assessments, logout }
)(QuestionnaireCompleted);