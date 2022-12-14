export default class ListTodo {
   listOfTodo = [];

   addNewTodo = (todo) => {
      let listTodo = this.listOfTodo;
      listTodo.push(todo);
      return listTodo;
   };

   removeTodo = (index, array) => {
      for (const todo in array) {
         if (todo == index) {
            array.splice(index, 1);
         }
      }
      return array;
   };

   changeTodoStatus = (index) => {
      let listTodo = this.listOfTodo;
      for (const todo of listTodo) {
         let indexTodo = listTodo.indexOf(todo);
         if (todo.status == false) {
            if (indexTodo == index) {
               todo.status = !todo.status;
            }
         } else {
            if (indexTodo == index) {
               todo.status = !todo.status;
            }
         }
      }
      return listTodo;
   };

   sortTodo = (array) => {
      array.sort(function (a, b) {
         if (a.name < b.name) {
            return -1;
         }
         if (a.name > b.name) {
            return 1;
         }
         return 0;
      });
      return array;
   };
}
