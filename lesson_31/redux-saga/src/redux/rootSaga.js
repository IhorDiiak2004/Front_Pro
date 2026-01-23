import { all } from "redux-saga/effects";
import { watchTodos } from "./watchers";

export default function* rootSaga() {
  yield all([watchTodos()]);
}
