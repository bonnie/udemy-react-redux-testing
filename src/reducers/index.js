import { combineReducers } from 'redux';
import commentsReducer from './reducer_comments'

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
