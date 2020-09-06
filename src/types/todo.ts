import { Todo } from "../models/Todo";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const LOADING = "LOADING";

export interface GetTodosAction {
  type: typeof GET_TODOS;
  payload: Todo[];
}
export interface AddTodosAction {
  type: typeof ADD_TODOS;
  payload: Todo;
}

export interface UpdateTodosAction {
  type: typeof UPDATE_TODO;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}
export interface LoadingAction {
  type: typeof LOADING;
}

export type TodoActionTypes =
  | GetTodosAction
  | DeleteTodoAction
  | UpdateTodosAction
  | AddTodosAction
  | LoadingAction;
