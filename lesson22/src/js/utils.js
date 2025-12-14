  export function renderTasks() {
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