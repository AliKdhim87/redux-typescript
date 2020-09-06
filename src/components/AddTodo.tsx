import React, { FC, useState } from "react";
import { Form, Button, Divider } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todo";
import { AppState } from "../store";

const AddTodo: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.todo);
  const [inputTodo, setInputTodo] = useState("");

  const [error, setError] = useState<boolean>(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputTodo.trim() === "") {
      setError(true);
      return;
    }
    dispatch(addTodo({ title: inputTodo, completed: false }));
    setInputTodo("");
  };

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
    setError(false);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group widths="equal">
        <Form.Input
          id="form-subcomponent-shorthand-input-first-name"
          placeholder="First name"
          size="large"
          onChange={onChangeInputHandler}
          value={inputTodo}
          error={
            error && { content: "Please enter something", pointing: "below" }
          }
        />
      </Form.Group>
      <Button size="large" fluid primary loading={loading}>
        Add
      </Button>
      <Divider hidden />
    </Form>
  );
};

export default AddTodo;
