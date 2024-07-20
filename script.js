document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (!taskText) {
        alert('Please enter a task!');
        return;
      }
  
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
  
      removeBtn.onclick = function() {
        taskList.removeChild(newTask);
      };
  
      newTask.appendChild(removeBtn);
      taskList.appendChild(newTask);
  
      taskInput.value = '';
    }
  
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Call addTask on initial load to handle any pre-populated tasks
    addTask();
  });
  