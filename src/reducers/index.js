import { combineReducers } from 'redux';
import polls from './polls';
import pollForm from './pollForm';

export default combineReducers({
  polls, 
  pollForm
});
