import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

export default createStore(rootReducer, composeWithDevTools());
