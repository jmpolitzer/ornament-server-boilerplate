import R from 'ramda';
import * as Constants from './constants';

const initialState = {
  todoList: [],
  isEditingTodo: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todoList: action.todos
      }

    /* TODO: Do we need this? */
    case Constants.CREATE_TODO_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.DELETE_TODO_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.UPDATE_TODO_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.CREATE_TODO_ITEM_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.DELETE_TODO_ITEM_SUCCESS:
      return {
        ...state
      }

    case Constants.IS_EDITING_TODO:
      /* TODO: Make this prettier. */
      const editables = R.contains(action.id, state.isEditingTodo) ?
                        R.reject(R.equals(action.id), state.isEditingTodo) :
                        R.append(action.id, state.isEditingTodo);

      return {
        ...state,
        isEditingTodo: editables
      }

    default:
      return state;
  }
}
