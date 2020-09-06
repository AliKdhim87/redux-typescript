import { Todo } from "./Todo";
export interface InitialState {
  todos: Todo[];
  loading?: boolean;
  error?: string;
}
