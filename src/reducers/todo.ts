import { InitialState } from "../models/InitialState";
import {
  TodoActionTypes,
  GET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_TODOS,
  LOADING,
} from "../types/todo";
export const initialState: InitialState = {
  todos: [],
  loading: false,
};

export default (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos?.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        loading: false,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos?.filter((todo) => todo.id !== action.payload),
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
