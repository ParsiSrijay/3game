import React,{ Component } from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class FinalScore extends Component{
	constructor(props){
		super(props)
	}

	handlePlayAgain(){
		this.props.history.push("/game1");
	}

	handleHome(){
		this.props.history.push("/home");
	}

	render(){
		return(
			<div className="center">
				Game Ended!!
				<br/>
				Your Score : {this.props.score}
				<br />
				<Button onClick={this.handlePlayAgain}> Play Again </Button>
				<Button onClick={this.handleHome}> Home </Button>
			</div>
		);
	}
}

export default withRouter(FinalScore);