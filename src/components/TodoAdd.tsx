import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { addNewTodoAtom, newTodoAtom } from "../store";

function TodoAdd() {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const setTodo = useAtom(addNewTodoAtom)[1];

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={() => setTodo(newTodo)}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
