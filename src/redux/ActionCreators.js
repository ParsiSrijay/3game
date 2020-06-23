import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchQuestions = () => (dispatch) => {
	dispatch(questionsLoading(true));

	return fetch(baseUrl + 'questions')
			.then(response =>{
				if(response.ok){
					return response;
				}
				else{
					var error = new Error('Error' +" "+response.status + ':' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			error => {
				var errmess = new Error(error.message);
				throw errmess;
			})
			.then(response => response.json())
			.then(questions => dispatch(addQuestions(questions)))
			.catch(error => dispatch(questionsFailed(error.message)));
};


export const questionsLoading = () => ({
	type:ActionTypes.QUESTIONS_LOADING
});

export const questionsFailed = (errmess) => ({
	type : ActionTypes.QUESTIONS_FAILED,
	payload: errmess
});

export const addQuestions = (questions) => ({
	type:ActionTypes.ADD_QUESTIONS,
	payload : questions
});

