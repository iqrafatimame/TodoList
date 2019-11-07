var todoList = {
    todos : [],
  displayTodos : function() {
  if(this.todos.length===0){
          console.log('Your List is Enmpty');
  }
      else{
      console.log('My Todos');
      for(var i=0; i < this.todos.length; i++){

          if(this.todos[i].completed===true){
              console.log('(X)' , this.todos[i].todoText);}
          else{
              console.log('( )' , this.todos[i].todoText);
          }
        }
      }
  } ,
  addTodos : function(todoText){ // addTodo('hi')
      this.todos.push({ 
          todoText : todoText,  // objects of todos
          completed : false
          });
      this.displayTodos();
  },
  changeTodos : function (position,todoText){
      this.todos[position].todoText = todoText; // will get only todoText property of the object
      this.displayTodos();
  },
  deleteTodo : function(position){
      this.todos.splice(position,1); // splice(position, number of items to be deleted);
      this.displayTodos();  
  },
  toggleCompleted : function(position) {
      var todo = this.todos[position];
      todo.completed =!todo.completed;
      this.displayTodos();
  },
  toggleAll: function(){
  var totalTodos = this.todos.length;
  var completedTodos = 0;
  for(var i=0; i< totalTodos; i++){
      if(this.todos[i].completed===true){
          completedTodos++;
      }
  }
      // case: 1 -> if everything is true , make it false
  if(completedTodos===totalTodos){
      for(var i=0; i<totalTodos; i++){
          this.todos[i].completed = false;
      }
  }
  else{ // case: 2 -> otherwise make everything true
      for(var i=0; i< totalTodos; i++){
          this.todos[i].completed = true;}
      }
          this.displayTodos();
 
}
      
};
    // in this way we had to write extra code to access the button 
/*
// 1: we want to get access to the button
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton); 
var toggleAllButton=document.getElementById('toggleAllButton');

    // 2: to perform the function when clicked
displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});
toggleAllButton.addEventListener('click',function(){
    todoList.toggleAll();
});*/

var handlers={                  // to simplify our code we used a object to access the button with specific method
    displayTodos:  function(){
        todoList.displayTodos();
    },
    toggleAll:  function(){
        todoList.toggleAll()
    },
    addTodos:  function(){
        var addTodoTextInput=document.getElementById('addTodoTextInput');
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value='';
    },
    changeTodos:  function(){
        var changeTodoPosition=document.getElementById('changeTodoPosition');
        var changeTodoTextInput=document.getElementById('changeTodoTextInput');
        todoList.changeTodos(changeTodoPosition.valueAsNumber,changeTodoTextInput.value);
        changeTodoPosition.value='';
        changeTodoTextInput.value='';
    },
    deleteTodo:  function(){
        var deleteTodoPosition=document.getElementById('deleteTodoPosition');
        todoList.changeTodos(deleteTodoPosition.valueAsNumber);
        deleteTodoPosition.value='';
    },
    toggleCompleted:  function(){
        var toggleCompletedPosition= document.getElementById('toggleCompletedPosition');
        todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
        toggleCompletedPosition.value='';
    }
};
