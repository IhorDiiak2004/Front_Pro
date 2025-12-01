
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addButton.addEventListener("click", () => {
  let text = taskInput.value;

  const textWithoutSpaces = text.replace(/ /g, "");
  if (textWithoutSpaces === "") return;

  tasks.push(text);
  taskInput.value = "";

  saveTasks();
  renderTasks();
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const indexToDelete = Number(event.target.dataset.index);
    tasks.splice(indexToDelete, 1);

    saveTasks();
    renderTasks();
  }
});

function clearTaskList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function renderTasks() {
  clearTaskList();

  tasks.forEach((taskText, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.dataset.index = index;

    li.append(span, deleteButton);
    taskList.append(li);
  });
}

renderTasks();

const savedTasks = localStorage.getItem("todoList");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
}

function saveTasks() {
  localStorage.setItem("todoList", JSON.stringify(tasks));
}