"use strict";

$(document).ready(function () {
  var taskInputField = $("#taskInput");
  var addTaskButton = $("#addTaskBtn");
  var taskListContainer = $("#taskList");
  var taskArray = [];
  loadTasks();
  renderTasks();
  addTaskButton.on("click", function () {
    var userText = taskInputField.val();
    var cleanedText = userText.replace(/\s/g, "");
    if (cleanedText === "") return;
    taskArray.push(userText);
    saveTasks();
    taskInputField.val("");
    renderTasks();
  });
  taskListContainer.on("click", "span", function () {
    var taskText = $(this).text();
    $("#modalTaskText").text(taskText);
    var modal = new bootstrap.Modal($("#taskModal"));
    modal.show();
  });
  taskListContainer.on("click", ".delete-btn", function () {
    var indexToRemove = $(this).data("index");
    taskArray.splice(indexToRemove, 1);
    saveTasks();
    renderTasks();
  });
  function renderTasks() {
    taskListContainer.empty();
    taskArray.forEach(function (taskText, taskIndex) {
      var listItem = $("\n                <li class=\"list-group-item\">\n                    <span class=\"task-text\">".concat(taskText, "</span>\n                    <button class=\"btn btn-danger btn-sm delete-btn\" data-index=\"").concat(taskIndex, "\">\n                        \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438\n                    </button>\n                </li>\n            "));
      taskListContainer.append(listItem);
    });
  }
  function saveTasks() {
    localStorage.setItem("todo-jquery", JSON.stringify(taskArray));
  }
  function loadTasks() {
    var saved = localStorage.getItem("todo-jquery");
    if (saved) {
      taskArray = JSON.parse(saved);
    }
  }
});