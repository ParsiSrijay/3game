import React from 'react';
import PropTypes from 'prop-types';
import dog1 from "../assets/images/dog1.gif";
import dog2 from "../assets/images/dog2.gif";
import dog5 from "../assets/images/dog5.gif";
import dog4 from "../assets/images/dog4.gif";
import '../Result.css'
import Confetti from 'react-confetti'
const {height ,width}=300; 

function Result(props) {
  var logo=dog1;
  if(props.quizResult===1 || props.quizResult===0){
    logo=dog1;
  }else if(props.quizResult<=props.total/2 ){
    logo=dog2;

  }else if(props.quizResult>props.total/2){
    logo=dog4;
    
  }else{
    logo=dog5;
  }
  return (
    
    
      <div className="result">
        <Confetti
      width={width}
      height={height}
    />
        <center>Your score  is <strong>{props.quizResult}</strong>  out of <strong>{props.total}</strong> !</center>
        <img  id="dog" src={logo}/>
        <button className="back"  > Back to Home page </button> 
        <button className="play"  onClick={props.play}> Play Again </button> 
      </div>
    
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;