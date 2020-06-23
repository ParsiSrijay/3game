import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import RenderGame from './RenderGame';

class MatchQuestion extends Component {
    constructor(props){
        super(props);
    }

    render() {
        
        var inf=[],p=1;
        this.props.questions.forEach((m) => {
            inf.push(
                {
                    info : m.info,
                    id : p++
                }
            );
        })
        return(
            <RenderGame matches={this.props.questions} info={inf}/>
        );
    }
}

export default MatchQuestion;