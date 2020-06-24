import React,{ Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button} from 'reactstrap';
import { Alert } from 'react-bootstrap';

function CheckAnswer({correctAnswer,selectedOptions,display}){
  var c=0;
  if(display){
    for(var i=0;i<correctAnswer.length;i++){
      if(correctAnswer[i].val === selectedOptions[i].val){
        c=c+1
      }
    }
    return(
      // <Alert key={1} variant='success'>
      //   <span>Your points :&nbsp;</span>{c}
      // </Alert> 
      <div className="mb-2">
        <div>
            <span className="fa  fa-star fa-lg"></span> Your Score is {c}
        </div>
      </div>
    );
  }
  else{
    return(
      <div>
      </div>
    );
  }
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class RenderGame extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.matches,
            info: this.props.matches,
            dragDisabled:false,
            showScore:false
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleScore = this.handleScore.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items:items
    });
  }

  handleDrag(){
    this.setState({
      dragDisabled: true,
      showScore:true
    });
  }

  handleScore(){
    this.setState({
      showScore: false,
      dragDisabled:false
    });
  }

  componentDidMount() {
    var columns = this.state.info;
    for(var i = columns.length - 1 ; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            const temp = columns[i];
            columns[i] = columns[j];
            columns[j] = temp;
    }
    this.setState({
      info : columns
    })
  }

  render() {
  
    const inf = this.state.info.map((info) => {
        return (
            <div key={info.id}>
                <a role="button" className="btn btn-success dropbox pt-1">{info.info}</a>
            </div>
        );
    });

    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    
                </div>
                <div className="col-12 mt-4 mb-4">
                    <b><i>Start Matching now</i></b>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    {inf}
                </div>
                <div className="col-4">
                <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                    <>  
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                            >
                        {this.state.items.map((item, index) => ( 
                            <Draggable key={item.id} draggableId={item.id.toString()} index={index} isDragDisabled={this.state.dragDisabled}>
                            {(provided, snapshot) => (
                                <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="col-12"
                                >
                                    <a role="button" className="btn btn-primary dropbox pt-1">{item.val}</a>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    </>
                    )}
                </Droppable>
                </DragDropContext>
                </div>
            </div>
        </div>
        {' '}
        <div className="container">
            <div className="row">
                <div className="mt-2 offset-2" style={{display: this.state.dragDisabled ? 'none' : 'inline-block' }}>
                    <Button onClick={this.handleDrag} className="bg-info dropbox pt-1">
                        <span>Score</span>
                    </Button>
                </div>
                <div className="mt-2 offset-2" style={{display: this.state.dragDisabled ? 'inline-block' : 'none' }}>
                    <Button onClick={this.handleScore} className="bg-warning dropbox pt-1">
                        <span>Play Again</span>
                    </Button>
                </div>
            </div>
        </div>
        <div className="mt-2">
            <CheckAnswer correctAnswer={this.props.matches} selectedOptions={this.state.items} display={this.state.dragDisabled}/>
        </div>
      </>
    );
  }
}

export default RenderGame;