let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();
    if (task) {
        taskList.push({ text: task, completed: false });
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    let taskListHTML = '';
    taskList.forEach((task, index) => {
        taskListHTML += `
            <li>
                <span ${task.completed ? 'class="completed"' : ''}>${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(${index})">X</button>
            </li>
        `;
    });
    document.getElementById('task-list').innerHTML = taskListHTML;
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
}

document.addEventListener('DOMContentLoaded', renderTaskList);