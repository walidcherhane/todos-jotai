import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  deleteTodoAtom,
  newTodoAtom,
  todosAtom,
  toggleTodoAtom,
} from "../store";

function TodoListItems() {
  const todos = useAtom(todosAtom)[0];
  const deleteTodo = useAtom(deleteTodoAtom)[1];
  const toggleTodo = useAtom(toggleTodoAtom)[1];
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);

  return (
    <>
      {todos.map((todo: { id: number; text: string; done: boolean }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onChange={(e) => toggleTodo(todo.id)} checked={todo.done} />
          <Input
            mx={2}
            value={newTodo ?? todo.text}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
