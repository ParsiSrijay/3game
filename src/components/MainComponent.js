import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/ActionCreators';
import Questions from './QuestionsComponent';
import MatchQuestion from './MatchComponent';
import Final from './Final';
import Home from './HomeComponent';
import FinalScore from './FinalScoreComponent';
import { SCENARIO_QUESTIONS } from '../shared/db';
import { MATCH_INFO,MCQ_QUESTIONS } from '../shared/db';
import { Button } from 'react-bootstrap';
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
import "../index.css";

class Main extends Component{
	constructor(props){
    super(props);
    this.state = {
      questions1:SCENARIO_QUESTIONS,
      questions2:MATCH_INFO,
      question3:MCQ_QUESTIONS
    }
  }

  	

	render(){
		const Question = () =>{
	  		return(
	  			<Questions questions={this.state.questions1} />
	  		);
	  	}

	  	const Match = () => {
	  		return(
	  			<MatchQuestion questions={this.state.questions2} />	
	  		);
	  	}

	  	const Mcq = () => {
	  		return(
	  			<div className="col-12">
	  				<Final quizQuestions={this.state.question3} />
	  			</div>
	  		);
	  	}
	  	

		return(
			<Switch>
			  <Route exact path="/home" component={() => <Home />} />	
              <Route exact path="/game1" component={ Question  } />
              <Route exact path="/game2" component={ Match  } />
              <Route exact path="/game3" component={ Mcq } />
              <Redirect to="/home" /> 
            </Switch>	
		)
	}
}
export default withRouter(Main);