import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  children: []
});

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_CHILDREN_SUCCESS:
      return state.set('children', action.children);      
    default:
      return state;
  }
}