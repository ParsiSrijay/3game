import { createStore,combineReducers,applyMiddleware } from 'redux';
import { Questions } from './questions';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			questions:Questions
		}),
		applyMiddleware(thunk,logger)
	);

	return store;
}