document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // New function to load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save again when loading
    }
  
    function addTask(taskText, save = true) {
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
  
      removeBtn.onclick = function() {
        taskList.removeChild(newTask);
        
        // Update tasks array and Local Storage on removal
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const taskIndex = storedTasks.indexOf(taskText);
        storedTasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      };
  
      newTask.appendChild(removeBtn);
      taskList.appendChild(newTask);
  
      taskInput.value = '';
  
      if (save) {
        // Update tasks array and Local Storage on addition
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask(taskInput.value.trim());
      }
    });
  
    // Call loadTasks and addTask on initial load
    loadTasks();
    addTask(); // Call addTask to handle any pre-populated tasks
  });
  