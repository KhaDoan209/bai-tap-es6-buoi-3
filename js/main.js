import ToDo from './ToDo.js';
import ListTodo from './ListTodo.js';

const listTodo = new ListTodo();

const queryBy = (selector) => {
   return document.querySelector(selector);
};
const setLocalStorage = () => {
   localStorage.setItem('TodoList', JSON.stringify(listTodo.listOfTodo));
};
const getLocalStorage = () => {
   if (localStorage.getItem('TodoList') != null) {
      listTodo.listOfTodo = JSON.parse(localStorage.getItem('TodoList'));
   }
};
getLocalStorage();

const displayTodoFromList = (array) => {
   let todoUndone = '',
      todoDone = '';
   array.map((item) => {
      if (item.status == false) {
         return (todoUndone += `<li>${item.name} 
         <div class="buttons">
             <button onclick="updateTodoStatus('${array.indexOf(
                item
             )}')" class="complete"><i class="fa-regular fa-circle-check"></i></button>
            <button onclick="removeTodoFromList('${array.indexOf(
               item
            )}')" class="remove"><i class="fa-regular fa-trash-can"></i></button>
         </div>
         </li>`);
      } else {
         return (todoDone += `<li>${item.name} 
         <div class="buttons">
             <button onclick="updateTodoStatus('${array.indexOf(
                item
             )}')" class="complete"><i class="fa-solid fa-circle-check"></i></button>
            <button onclick="removeTodoFromList('${array.indexOf(
               item
            )}')" class="remove"><i class="fa-regular fa-trash-can"></i></button>
         </div>
         </li>`);
      }
   });
   queryBy('#completed').innerHTML = todoDone;
   queryBy('#todo').innerHTML = todoUndone;
};
window.onload = displayTodoFromList(listTodo.listOfTodo);

const addNewTodoToList = () => {
   let name = queryBy('#newTask').value;
   let reg = /([A-Za-z1-9])\w+/;
   if (name == '') {
      alert('Please enter the todo name');
   } else if (!name.match(reg)) {
      alert('The todo name is invalid, please check again');
   } else {
      let status = false;
      let newTodo = new ToDo(name, status);
      listTodo.addNewTodo(newTodo);
      displayTodoFromList(listTodo.listOfTodo);
      setLocalStorage();
   }
};
queryBy('#addItem').onclick = addNewTodoToList;

const removeTodoFromList = (index) => {
   listTodo.removeTodo(index, listTodo.listOfTodo);
   displayTodoFromList(listTodo.listOfTodo);
   setLocalStorage();
};
window.removeTodoFromList = removeTodoFromList;

const updateTodoStatus = (index) => {
   listTodo.changeTodoStatus(index);
   displayTodoFromList(listTodo.listOfTodo);
   setLocalStorage();
};
window.updateTodoStatus = updateTodoStatus;

const sortTodoByName = () => {
   displayTodoFromList(listTodo.sortTodo(listTodo.listOfTodo));
};
const sortTodoByNameReverse = () => {
   displayTodoFromList(listTodo.sortTodo(listTodo.listOfTodo).reverse());
};
window.sortTodoByNameReverse = sortTodoByNameReverse;
window.sortTodoByName = sortTodoByName;
