class TodoItem {
  constructor(title, content, startDate, endDate) {
    this.title = title || "Title not set";
    this.content = content || "No description";
    this.startDate = startDate || "Start date not set";
    this.endDate = endDate || "End date not set";
    this.completed = false;
  }

  setDeadline(endDate) {
    this.endDate = endDate;
  }

  setDeadlineIn(days) {
    const time = this.startDate.getTime() + days * 24 * 60 * 60 * 1000;
    const date = new Date(time);
    this.endDate = date;
  }

  getRemainingDays() {
    const date = new Date(this.endDate);
    return Math.ceil((date - this.startDate) / 1000 / 60 / 60 / 24);
  }

  getHtmlTemplate() {
    const words = ["Start datum", "Slut datum", "Start date", "End date"];
    const index = currentLanguage == "swedish" ? 0 : 2;
    return `
   <p class="todo-content">${this.content}</p>
   <p>${words[index]}: ${this.startDate}</p>
   <p>${words[index + 1]}: ${this.endDate}</p>
   `;
  }

  createCompletedTodoCard(parent) {
    const todoCard = document.createElement("div");
    todoCard.className = "see-todo-items";
    const word = currentLanguage == "swedish" ? "Radera" : "Delete";
    todoCard.innerHTML = `<span>${this.title}</span>` + this.getHtmlTemplate();
    const button = document.createElement("button");
    button.textContent = word;
    button.className = "button delete";
    button.addEventListener("click", (event) => {
      onDeleteClick(event, this);
    });
    todoCard.children[0].append(button);
    parent.append(todoCard);
  }

  createTodoCard(parent, refreshPage) {
    const todoCard = document.createElement("div");
    todoCard.className = "see-todo-items";
    todoCard.innerHTML =
      `
    <span>
      ${this.title}
      <input class="checkbox" type="checkbox" ${this.completed && "checked"}/>
    </span>
    ` + this.getHtmlTemplate();
    todoCard.querySelector(".checkbox").addEventListener("click", (event) => {
      onCheckClick(event, this, refreshPage);
    });
    parent.append(todoCard);
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  removeTodoItem(todoItem) {
    const index = this.todos.indexOf(todoItem);
    if (index != -1) {
      this.todos.splice(index, 1);
    }
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach((todo) => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    return this.todos.filter((todo) => todo.title.includes(titleQuery));
  }

  getTodosByCompleted() {
    return this.todos.filter((todo) => todo.completed);
  }

  getTodosByNotCompleted() {
    return this.todos.filter((todo) => !todo.completed);
  }

  getTodosByRemainingTime(days) {
    return this.todos.filter((todo) => todo.getRemainingDays() <= days);
  }

  getHtmlList() {
    return this.todos.map((todo) => todo.getHtmlTemplate()).join("");
  }
}
