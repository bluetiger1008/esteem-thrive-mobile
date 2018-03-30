import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import QuestionnaireCompletedWrapper from './completed.style';
import { Div } from '../common';
import appActions from '../../redux/app/actions';

const { get_assessments, get_children, select_assessment } = appActions;

class QuestionnaireCompleted extends Component {
  componentDidMount() {
    this.props.get_children();
  }
  
	render() {
		const { selectedChildren, questionnaires, children } = this.props;

		return (
			<QuestionnaireCompletedWrapper>
				<Div className="header" direction="column" justifyContent="center" alignItems="center">
					<p>{selectedChildren.name}</p>
					<img src={logo} alt="logo" className="logo"/>
				</Div>
        <Div className="content" direction="column" alignItems="center">
          <h2>{questionnaires.title}</h2>
          <h2>Completed</h2>
          <button className="btn-continue">
            Continue
          </button>
          <button className="btn-logout">
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
  { get_assessments, get_children, select_assessment }
)(QuestionnaireCompleted);