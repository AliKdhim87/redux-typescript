import axios from "axios";
import {
  GET_TODOS,
  DELETE_TODO,
  TodoActionTypes,
  UPDATE_TODO,
  ADD_TODOS,
  LOADING,
} from "../types/todo";
import { Dispatch } from "redux";
import { Todo } from "../models/Todo";

export const baseUri = "https://jsonplaceholder.typicode.com/todos";
export const getTodos = () => async (dispatch: Dispatch<TodoActionTypes>) => {
  dispatch({ type: LOADING });
  const { data } = await axios.get(`${baseUri}?_limit=5`);
  dispatch({
    type: GET_TODOS,
    payload: data,
  });
};
export const deleteTodo = (id: string) => async (
  dispatch: Dispatch<TodoActionTypes>
) => {
  dispatch({ type: LOADING });
  await axios.delete(`${baseUri}/${id}`);
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
export const updateTodo = (todo: Todo) => async (
  dispatch: Dispatch<TodoActionTypes>
) => {
  const config = {
    headers: {
      "Type-Content": "application/json",
    },
  };
  dispatch({ type: LOADING });
  const { data } = await axios.patch(`${baseUri}/${todo.id}`, todo, config);
  dispatch({
    type: UPDATE_TODO,
    payload: data,
  });
};
export const addTodo = (todo: Todo) => async (
  dispatch: Dispatch<TodoActionTypes>
) => {
  const config = {
    headers: {
      "Type-Content": "application/json",
    },
  };
  dispatch({ type: LOADING });
  const { data } = await axios.post(`${baseUri}`, todo, config);

  dispatch({
    type: ADD_TODOS,
    payload: data,
  });
};
