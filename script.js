document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
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
        
     
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const taskIndex = storedTasks.indexOf(taskText);
        storedTasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      };
  
      newTask.appendChild(removeBtn);
      taskList.appendChild(newTask);
  
      taskInput.value = '';
  
      if (save) {
       
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    addButton.addEventListener('click', function() {
      addTask(taskInput.value.trim());
    });
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask(taskInput.value.trim());
      }
    });
  
   
    loadTasks();
  });
  