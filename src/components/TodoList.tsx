import React, { FC } from "react";
import { Todo } from "../models/Todo";
import { List, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../actions/todo";
import { useDispatch } from "react-redux";

const IconStyled = styled(Icon)`
  float: right;
  cursor: pointer;
`;
type TodoItemType = {
  textDecoration: string;
};
const TodoItem = styled.div<TodoItemType>`
  text-decoration: ${({ textDecoration }) => textDecoration};
`;
const TodoList: FC<Todo> = ({ completed, title, id }) => {
  const dispatch = useDispatch();
  const todo = { id, completed: !completed, title };
  return (
    <>
      <List.Item>
        <List.Content>
          <TodoItem textDecoration={completed ? "line-through" : ""}>
            {title}
          </TodoItem>
          <IconStyled
            name={completed ? "checkmark" : "close"}
            size="large"
            color={completed ? "green" : "red"}
            bordered
            onClick={() => dispatch(updateTodo(todo))}
          ></IconStyled>

          <IconStyled
            name="trash alternate"
            size="large"
            bordered
            onClick={() => id && dispatch(deleteTodo(id))}
          ></IconStyled>
        </List.Content>
      </List.Item>
    </>
  );
};

export default TodoList;
