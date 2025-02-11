
  const addBtn = document.getElementById("add-todo-btn");
const todoInput = document.getElementById("todo-input");
const todosContainer = document.querySelector(".todos-container");

// to store all todos use array
let todos = [];

addBtn.addEventListener("click", () => {
  const todoTitle = todoInput.value;

  if (todoTitle) {
    const todoObj = {
      title: todoTitle,
      isCompleted: false,
      id: Date.now(), 
    };

    todos.push(todoObj);
    updateUi();

    todoInput.value = ""; // Clear input field
  }
});

function updateUi() {
  todosContainer.innerHTML = ""; 

  
  todos.forEach(todo => {
    const todoPara = document.createElement("p");
    todoPara.innerHTML = todo.title;

    // Create a delete button for each todo
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("onclick", `deleteTodo(${todo.id})`); 

    // Append todo text and delete button to the container
    todosContainer.append(todoPara);
    todosContainer.append(deleteButton);
  });
}

function deleteTodo(id) {
  // Filter out the todo to be deleted based on the id
  todos = todos.filter(todo => todo.id !== id);

  // Update UI after deletion
  updateUi();
}
