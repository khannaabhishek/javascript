//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){

  //Dom Load event
  document.addEventListener('DOMContentLoaded', getTasks);

  //Add task event
  form.addEventListener('submit', addTask);

  clearBtn.addEventListener('click', clearList);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //Filter event
  filter.addEventListener('keyup', filterTask);
}

//Get Tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){

    taskList.appendChild(createListElement(task));
  })

}

//Add tasks
function addTask(e){

  if(taskInput.value !=''){
    taskList.appendChild(createListElement(taskInput.value ));

    //Store in local stogare
    soretaskLocalStogare(taskInput.value);
    taskInput.value='';
  }
  e.preventDefault(); 
}     

//Add tasks to LS
function soretaskLocalStogare(task){

  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Create li element
function createListElement(taskValue){
  const li = document.createElement('li');
  
   li.className='collection-item';
   li.appendChild(document.createTextNode(taskValue));

  const link = document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  return li;
}

function clearList(){
  // /taskList.innerHTML='';

  //Faster way

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLS('tasks');
}

//Clear from LS
function clearTasksFromLS(listName){

  let listToClear;
  if(localStorage.getItem(listName)!=null){
    listToClear = [];
    localStorage.setItem(listName, JSON.stringify(listToClear));
  }

}

function removeTask(e){

  if(e.target.classList.contains('fa-remove')){
    e.target.parentElement.parentElement.remove();
    removeTaskFromLS(e.target.parentElement.parentElement);
  }
}

//Remove from LS
function removeTaskFromLS(taskItem){

  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){

    if(taskItem.textContent === task){
      tasks.splice(index,1);
    }

    localStorage.setItem('tasks',JSON.stringify(tasks));

  })
}

function filterTask(e){

  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) !=-1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });

}
