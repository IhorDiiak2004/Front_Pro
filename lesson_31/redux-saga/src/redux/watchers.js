import { takeEvery } from "redux-saga/effects";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "./slices/todoSlice";

import {
  fetchTodosSaga,
  addTodoSaga,
  deleteTodoSaga,
  editTodoSaga,
  toggleTodoSaga,
} from "./workers";

export function* watchTodos() {
  yield takeEvery(fetchTodos.type, fetchTodosSaga);
  yield takeEvery(addTodo.type, addTodoSaga);
  yield takeEvery(deleteTodo.type, deleteTodoSaga);
  yield takeEvery(editTodo.type, editTodoSaga);
  yield takeEvery(toggleTodo.type, toggleTodoSaga);
}