import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  Box
} from "@mui/material";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          gap: 2,
          mb: 3
        }}
      >
        <TextField
          fullWidth
          label="Нове завдання"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            px: 4,
            fontWeight: 600,
            whiteSpace: "nowrap"
          }}
          onClick={addTodo}
        >
          Додати
        </Button>
      </Box>

      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </List>
    </Box>
  );
}

