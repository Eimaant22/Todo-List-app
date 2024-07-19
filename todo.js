const addTaskDiv = document.getElementById('addTask');
const taskListDiv = document.getElementById('taskList');
const deletedTasksDiv = document.getElementById('deletedTasks');
const tasksUl = document.getElementById('tasks');
const deletedTasksUl = document.getElementById('deletedTasksList');
hideAllSections();

function hideAllSections() {
    document.getElementById('addTask').style.display = 'none';
    document.getElementById('taskList').style.display = 'none';
    document.getElementById('deletedTasks').style.display = 'none';
}

// Show/Hide Functions
function showAddTask() {
    addTaskDiv.style.display = 'block';
    taskListDiv.style.display = 'none';
    deletedTasksDiv.style.display = 'none';
}

function showTaskList() {
    addTaskDiv.style.display = 'none';
    taskListDiv.style.display = 'block';
    deletedTasksDiv.style.display = 'none';
}

function showDeletedTasks() {
    addTaskDiv.style.display = 'none';
    taskListDiv.style.display = 'none';
    deletedTasksDiv.style.display = 'block';
}

// Add Task Function
function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskTitle && taskDescription) {
        const li = document.createElement('li');
       
        li.textContent = `${taskTitle}: ${taskDescription}`;


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add("btn2");

        deleteButton.onclick = function() {
            deleteTask(li);
        };
        li.appendChild(deleteButton);

        tasksUl.appendChild(li);
        document.getElementById('taskForm').reset();
        showTaskList();
    }
}

// Delete Task Function
function deleteTask(taskElement) {
    tasksUl.removeChild(taskElement);
    deletedTasksUl.appendChild(taskElement);
    taskElement.querySelector('button').remove();
}

// Initialize
showTaskList();