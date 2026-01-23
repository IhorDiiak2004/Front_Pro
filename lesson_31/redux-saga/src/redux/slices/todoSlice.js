import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodos: (state) => {
      state.isLoading = true;
    },
    addTodo: (state) => {
      state.isLoading = true;
    },
    deleteTodo: (state) => {
      state.isLoading = true;
    },
    editTodo: (state) => {
      state.isLoading = true;
    },
    toggleTodo: (state) => {
      state.isLoading = true;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload.id
      );
      state.isLoading = false;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      state.isLoading = false;
    },
    toggleItem: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload.id
      );
      if (item) {
        item.completed = action.payload.completed;
      }
      state.isLoading = false;
    },
  },
});

export const {
  fetchTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  fetchItems,
  addItem,
  deleteItem,
  updateItem,
  toggleItem,
} = todoSlice.actions;

export default todoSlice.reducer;