
var todoList = [];

function startFuncion(){
  console.log('i am started');
}

function buttonClickedHandler(){
  var myInput = document.getElementById('todoInput');
  todoList.push(myInput.value);
  render();
  //alert('Your todo item successfully added');
}

function deleteTodoItemHandler(event){
  var index = event.target.getAttribute('data-todo-index');
  if(index > -1){
    todoList.splice(index, 1);
  }
  render();
}

function render(){
  //fetch/get the existing element by id
  var myUl = document.getElementById('todo-item-list');
  myUl.addEventListener('click', deleteTodoItemHandler);
  myUl.innerHTML = '';
  for(var i=0; i<todoList.length; i++){
    //creates a new li element
    var li = document.createElement('li');
    //sets the li elements value to item of array
    li.innerHTML = `<label>${todoList[i]}</label>
      <button class="myButton" data-todo-index="${i}">x</button> `;
    //adds the li(list) element to ul(unordered list)
    myUl.appendChild(li);
  }
}

startFuncion();
