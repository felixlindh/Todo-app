const container = document.querySelector(".container");

const todoList = new TodoList();

const todoItem = new TodoItem("Städa", "Damsug huset", "2022-12-31", "2023-01-02");
const todoItem2 = new TodoItem("Städa", "Moppa golvet", "2022-01-02", "2042-05-03");
const todoItem3 = new TodoItem("Programmera", "Koda personlig AI betjänt", "2022-12-30", "2049-04-20");
const todoItem4 = new TodoItem("Tävling", "Vinn ultimate todo app tävling", "2022-12-28", "2023-01-05");
const todoItem5 = new TodoItem("Fira", "Om vi vinner tävlingen => celebrateVictory()", "2023-01-05", "2023-01-06");
const todoItem6 = new TodoItem("Sober oktober", "Håll dig nykter", "2023-10-01", "2023-10-31");
const todoItem7 = new TodoItem("Movember", "Odla bra skägg", "2023-11-01", "2023-11-30");


todoList.addTodoItem(todoItem);
todoList.addTodoItem(todoItem2);
todoList.addTodoItem(todoItem3);
todoList.addTodoItem(todoItem4);
todoList.addTodoItem(todoItem5);
todoList.addTodoItem(todoItem6);
todoList.addTodoItem(todoItem7);

(() => {
  setMainMenu();
})();


