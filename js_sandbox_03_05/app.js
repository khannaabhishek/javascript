let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = list;
val = listItem;

//get Child nodes

val = list.childNodes; //gives line brakes also as text nodes
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;


// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.previousElementSibling;

// Get prev sibling
 val = listItem.previousSibling;
 val = listItem.previousElementSibling;
console.log(val);

//Create element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'New Item';

//Add attribute
li.setAttribute('title', 'New Item');

//Create text node and Append
li.appendChild(document.createTextNode('Hello World'));

//Create new link
const link = document.createElement('a');
//Add classes
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append link to li
li.appendChild(link);

//Append li to the ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);

//Replace Element

const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get old heading
const oldHeading = document.getElementById('task-title');
//Parent
const parentHeading = oldHeading.parentElement;

//Replace old with new heading
parentHeading.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//Remove element
const lis = document.querySelectorAll('li');
const listUl = document.querySelector('ul');
//remove list element
lis[1].remove();

//remove child element
listUl.removeChild(lis[5]);
console.log(lis);

//Classes & Attr
const firstLi = document.querySelector('li:first-child');
const alink = firstLi.children[0];

//Class
let classVal = alink.classList;
alink.classList.add('test');
alink.classList.remove('test');

//Attribute
val = alink;
val = alink.getAttribute('href');
val = alink.setAttribute('href', 'http://google.com');
val = alink.hasAttribute('true');


//Events

//Add eventListener
// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Clicked');
//   e.preventDefault();
// });
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
  
  //console.log('Clicked');
  val = e;
  console.log(val)

   //Event target
   val = e.target;
   console.log(val)
   
   e.target.innerHTML='Clicked';
   val = e.type;
   console.log(val)
   e.preventDefault();
}

console.log(val);
