// JavaScript for To-Do List

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const deleteAllBtn = document.getElementById('deleteAll');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a container for the icons
    const iconContainer = document.createElement('div');
    iconContainer.style.display = 'inline-block';
    iconContainer.style.marginLeft = '10px';

    // Create check icon
    const checkIcon = document.createElement('span');
    checkIcon.textContent = '✔️';
    checkIcon.style.color = 'green';
    checkIcon.style.cursor = 'pointer';
    checkIcon.style.display = 'none'; // Initially hidden

    // Create cross icon
    const crossIcon = document.createElement('span');
    crossIcon.textContent = '❌';
    crossIcon.style.color = 'red';
    crossIcon.style.cursor = 'pointer';

    // Click event for the check icon
    checkIcon.addEventListener('click', () => {
        li.classList.toggle('done');
        checkIcon.style.display = 'none';
        crossIcon.style.display = 'inline';
    });

    // Click event for the cross icon
    crossIcon.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    iconContainer.appendChild(checkIcon);
    iconContainer.appendChild(crossIcon);
    li.appendChild(iconContainer);
    
    taskList.appendChild(li);
    taskInput.value = '';

    // Show check icon when a task is added
    checkIcon.style.display = 'inline';
}

// Event listener for adding task
addTaskBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Delete all tasks
deleteAllBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
});
