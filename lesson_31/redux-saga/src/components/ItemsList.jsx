import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../redux/slices/todoSlice";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Button,
  Divider,
  TextField,
  CircularProgress,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

const ItemsList = () => {
  const { items, isLoading } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const startEdit = item => {
    setEditId(item.id);
    setEditValue(item.name);
  };

  const finishEdit = item => {
    dispatch(editTodo({ ...item, name: editValue }));
    setEditId(null);
  };

  if (isLoading) {
    return <CircularProgress sx={{ mt: 4 }} />;
  }

  return (
    <Box sx={{ mt: 5 }}>
      <List>
        {items.map(item => (
          <div key={item.id}>
            <Divider />
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {editId === item.id ? (
                <TextField
                  value={editValue}
                  size="small"
                  autoFocus
                  onChange={e => setEditValue(e.target.value)}
                  onBlur={() => finishEdit(item)}
                  onKeyDown={e =>
                    e.key === "Enter" && finishEdit(item)
                  }
                />
              ) : (
                <>
                  <Checkbox
                    checked={item.completed}
                    onChange={() =>
                      dispatch(
                        toggleTodo({
                          ...item,
                          completed: !item.completed,
                        })
                      )
                    }
                  />

                  <ListItemText
                    primary={item.name}
                    sx={{
                      textDecoration: item.completed
                        ? "line-through"
                        : "none",
                    }}
                  />

                  <Button
                    size="small"
                    onClick={() => startEdit(item)}
                    disabled={item.completed}
                  >
                    <EditIcon fontSize="small" />
                  </Button>
                </>
              )}

              <Button
                color="error"
                onClick={() => dispatch(deleteTodo(item.id))}
              >
                Delete
              </Button>
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
