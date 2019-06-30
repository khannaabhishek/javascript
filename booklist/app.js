//Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){

  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  console.log(row);
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){

  //Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title,author, isbn);

  //Instantiiate UI
  const ui = new UI();

  ui.addBookToList(book);
  
  e.preventDefault();
});