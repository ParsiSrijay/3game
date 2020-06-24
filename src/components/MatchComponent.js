import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import RenderGame from './RenderGame';

class MatchQuestion extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <RenderGame matches={this.props.questions} />
        );
    }
}

export default MatchQuestion;