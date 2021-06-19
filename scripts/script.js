'use strict'

const todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed'),
todoRemove = document.querySelector('.todo-remove');

console.log(todoRemove);
console.log(todoCompleted);
const todoData =[];

const render = function(){
  todoList.textContent = '';
  todoCompleted.textContent = '';
  
  todoData.forEach(function(item){
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
      '<div class="todo-buttons">' + 
      '<button class="todo-remove"></button>' + 
      '<button class="todo-complete"></button>' + 
      '</div>';

    headerInput.value = '';

    if(item.completed){
      todoCompleted.append(li);
    }else{
      todoList.append(li);
    }
    
    const btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function(){
      todoData.pop();
     
      li.style.display = 'none';
      
    })

    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function(){
      item.completed = !item.completed;
      render();
    })
  });
};

const showText = function(){
  todoList.textContent =  localStorage.myText;
};

todoControl.addEventListener('submit',function(event){
  event.preventDefault();
  if(headerInput.value !== '' && headerInput.value !== ' '){
    const newTodo = {
      value: headerInput.value,
      completed: false,
      
    }
  
  todoData.push(newTodo);
  JSON.stringify(todoData)
  localStorage.myText = todoData;
}
  render();
});
showText();
render();

