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
  form.addEventListener('submit', addTask);
}

function addTask(e){

  if(taskInput.value !=''){
    taskList.appendChild(createListElement(taskInput.value ));
    taskInput.value='';
  }
  e.preventDefault(); 
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