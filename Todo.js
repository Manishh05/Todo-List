let button = document.getElementById('Add')
let todoList = document.getElementById('todo-List')
let input = document.getElementById('input1');

let todos = [];

button.addEventListener('click', ()=>{
    todos.push(input.value)
    addTodo(input.value)
    input.value= ''
})

function addTodo(todo){
   let para = document.createElement('p')
   para.innerText = todo
   todoList.appendChild(para)
   para.addEventListener('click',()=>{
    para.style.textDecoration = 'line-through'
    remove(todo)
   })

   para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
   })
}

function remove(todo){
   let index = todos.indexOf(todo)
    if(index>-1)
    todos.splice(index,1)
}