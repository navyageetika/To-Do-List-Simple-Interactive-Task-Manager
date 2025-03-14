function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Create a tick button for accomplished tasks
        const tickButton = document.createElement('span');
        tickButton.textContent = '✔';
        tickButton.classList.add('tick');
        tickButton.onclick = function() {
            li.classList.toggle('accomplished');
        };

        // Create a delete button
        const deleteButton = document.createElement('span');
        deleteButton.textContent = '✖';
        deleteButton.classList.add('cross');
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(tickButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = ''; // Clear the input field
    }
}
