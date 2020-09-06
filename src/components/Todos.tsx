import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  List,
  Divider,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import styled from "styled-components";
import { getTodos } from "../actions/todo";
import { AppState } from "../store";
import TodoList from "./TodoList";
import { Todo } from "../models/Todo";
import AddTodo from "./AddTodo";
const ContainerStyled = styled(Container)`
  margin-top: 3rem;
`;

const Title = styled.h2`
  padding: 2rem 0;
  color: #2185d0;
  text-align: center;
`;

const Todos: FC = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: AppState) => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <Card fluid>
        <Title>Todo App</Title>
        <Divider section />
        <AddTodo />
        <Card.Content>
          <List divided relaxed>
            {todos &&
              todos.length > 0 &&
              todos.map((todo: Todo) => <TodoList key={todo.id} {...todo} />)}
          </List>
        </Card.Content>
        {loading && (
          <Dimmer active>
            <Loader size="huge" />
          </Dimmer>
        )}
      </Card>
    </ContainerStyled>
  );
};

export default Todos;
