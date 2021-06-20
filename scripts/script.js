"use strict";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed"),
  todoRemove = document.querySelector(".todo-remove");

let todoData = [];

if (localStorage.todoData) {
  todoData = JSON.parse(localStorage.todoData);
} else {
  todoData = [];
}

const render = function () {
  todoList.textContent = "";
  todoCompleted.textContent = "";

  todoData.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.value +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    headerInput.value = "";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }
    if (todoData.length !== 0) {
      localStorage.todoData = JSON.stringify(todoData);
    } else {
      delete localStorage.todoData;
    }
    const btnTodoRemove = li.querySelector(".todo-remove");
    btnTodoRemove.addEventListener("click", function () {
      todoData.pop();
      li.style.display = "none";
      if (todoData.length !== 0) {
        localStorage.todoData = JSON.stringify(todoData);
      } else {
        delete localStorage.todoData;
      }
    });

    const btnTodoComplete = li.querySelector(".todo-complete");
    btnTodoComplete.addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
  if (headerInput.value.trim() !== "") {
    const newTodo = {
      value: headerInput.value,
      completed: false,
    };

    todoData.push(newTodo);
  }
  render();
});
render();
