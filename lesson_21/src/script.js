
$(document).ready(function () {

    const taskInputField = $("#taskInput");
    const addTaskButton = $("#addTaskBtn");
    const taskListContainer = $("#taskList");

    let taskArray = [];

    loadTasks();
    renderTasks();

    addTaskButton.on("click", function () {
        const userText = taskInputField.val();
        const cleanedText = userText.replace(/\s/g, "");

        if (cleanedText === "") return;

        taskArray.push(userText);
        saveTasks();

        taskInputField.val("");
        renderTasks();
    });

    taskListContainer.on("click", "span", function () {
        const taskText = $(this).text();
        $("#modalTaskText").text(taskText);
        const modal = new bootstrap.Modal($("#taskModal"));
        modal.show();
    });

    taskListContainer.on("click", ".delete-btn", function () {
        const indexToRemove = $(this).data("index");
        taskArray.splice(indexToRemove, 1);
        saveTasks();
        renderTasks();
    });

    function renderTasks() {
        taskListContainer.empty();

        taskArray.forEach((taskText, taskIndex) => {
            const listItem = $(`
                <li class="list-group-item">
                    <span class="task-text">${taskText}</span>
                    <button class="btn btn-danger btn-sm delete-btn" data-index="${taskIndex}">
                        Видалити
                    </button>
                </li>
            `);

            taskListContainer.append(listItem);
        });
    }

    function saveTasks() {
        localStorage.setItem("todo-jquery", JSON.stringify(taskArray));
    }

    function loadTasks() {
        const saved = localStorage.getItem("todo-jquery");
        if (saved) {
            taskArray = JSON.parse(saved);
        }
    }
});
