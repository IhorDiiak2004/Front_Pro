import { call, put } from "redux-saga/effects";
import {
  fetchItems,
  addItem,
  deleteItem,
  updateItem,
  toggleItem,
} from "./slices/todoSlice";
import API from "../constants/constants";

function fetchHelper(url, options) {
  return fetch(url, options).then(res => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json();
  });
}

export function* fetchTodosSaga() {
  const todos = yield call(fetchHelper, API.URL_TODO);
  yield put(fetchItems(todos));
}

export function* addTodoSaga(action) {
  const todo = yield call(fetchHelper, API.URL_TODO, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: action.payload,
      completed: false,
    }),
  });

  yield put(addItem(todo));
}

export function* deleteTodoSaga(action) {
  yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
    method: "DELETE",
  });

  yield put(deleteItem({ id: action.payload }));
}

export function* editTodoSaga(action) {
  const updated = yield call(
    fetchHelper,
    `${API.URL_TODO}/${action.payload.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    }
  );

  yield put(updateItem(updated));
}

export function* toggleTodoSaga(action) {
  const updated = yield call(
    fetchHelper,
    `${API.URL_TODO}/${action.payload.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    }
  );

  yield put(toggleItem(updated));
}