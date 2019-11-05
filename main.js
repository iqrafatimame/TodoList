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
// 1: we want to get access to the Todos button
var displayTodosButton = document.getElementById('displayTodosButton');
// 2: we want run displayTodos method when someone clicks
displaytodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});
