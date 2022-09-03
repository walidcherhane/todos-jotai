import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { todosAtom } from "../store";
import { useAtom } from "jotai";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const [todos, setTodos] = useAtom(todosAtom);
  const fetchTodos = async () => {
    return fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, ...data]);
      });
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={() => fetchTodos()}>Load</Button>
    </Grid>
  );
}

export default TopBar;
