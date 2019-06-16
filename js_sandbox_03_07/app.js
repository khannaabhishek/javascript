// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click',runEvent);
// clearBtn.addEventListener('dblclick',runEvent);

// card.addEventListener('mousemove', runEvent);
// function runEvent(e){
//   //console.log(`Event Type: ${e.type}`);
//   heading.textContent = `MouseX: ${e.offsetX}  MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},50)`;
//   e.preventDefault();
// }

//Event delegation

const ulist = document.querySelector('.collection');
ulist.addEventListener('click', runEvent);

function runEvent(e){
  //console.log(`Event Type: ${e.type}`);
  console.log(e.target);
   if(e.target.parentElement.classList.contains('delete-item'))
  e.target.parentElement.parentElement.remove();
  e.preventDefault();
}
console.log(ulist);