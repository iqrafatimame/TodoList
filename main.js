<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Todo List</title>
</head>
<body>
    <header></header>
    <h1> Todo List</h1>
    <!--<button id="displayTodosButton">Display Todos</button>
    <button id="toggleAllButton">Toggle All </button>
    -->

    <div>
        <button onclick="handlers.displayTodos()">Display Todos</button>
        <button onclick="handlers.toggleAll()">Toggle All </button>
    </div>
    <div>
        <button onclick="handlers.addTodos()">Add</button>
        <input id="addTodoTextInput" type="text">
    </div>
    <div>
        <button onclick="handlers.changeTodos()">Change Todo</button>
        <input id="changeTodoPosition" type="number">
        <input id="changeTodoTextInput" type="text">
    </div>
    <div>
        <button onclick="handlers.deleteTodo()"> Delete Todo</button>
        <input id="deleteTodoPosition" type="number">
    </div>
    <div>
        <button onclick="handlers.toggleCompleted()" >Toggle Completed</button>
        <input id="toggleCompletedPosition" type="number">
    </div>
     
    <script src="main.js">
    </script>
</body>
</html>
