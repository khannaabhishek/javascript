document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function(){
    const ulTag = document.querySelector('.jokes');

    let output = '';
    if(this.status===200){

      if(this.responseText.length>0){
        const response = JSON.parse(this.responseText);
        if(response.type==='success'){
  
          response.value.forEach( function(joke){
            output += `<li>${joke.joke}</li>`;
          });
        }else{
          output += '<li>Something went wrong</li>';
        }
  
      }else{
        output += '<li><b>Something went wrong</b></li>';  
      }
    }else{
      output += '<li>Something went wrong</li>';
    }
    ulTag.innerHTML=output;
  }

  xhr.send();

  e.preventDefault();
}