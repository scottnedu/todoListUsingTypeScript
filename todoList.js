var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(newTodo);
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo;
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                todo = item;
                break;
            }
        }
        if (todo) {
            todo.completed = true;
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        var initialLength = this.todos.length;
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        if (this.todos.length === initialLength) {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.listTodos = function () {
        this.todos.forEach(function (todo) {
            console.log("ID: ".concat(todo.id, ", Task: ").concat(todo.task, ", Completed: ").concat(todo.completed, ", Due Date: ").concat(todo.dueDate.toISOString().split('T')[0]));
        });
    };
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoList.prototype.updateTodoTask = function (id, newTask, newDueDate) {
        var todoFound = false; // Flag to track if the todo is found
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            if (todo.id === id) {
                todo.task = newTask; // Update the task
                if (newDueDate) {
                    todo.dueDate = newDueDate; // Update the dueDate if provided
                }
                todoFound = true; // Mark as found
                break; // Exit the loop
            }
        }
        if (!todoFound) {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.clearCompletedTodos = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    return TodoList;
}());
var todoList = new TodoList(); //This  adds the todos
todoList.addTodo("Learn TypeScript", new Date("2025-02-28"));
todoList.addTodo("Check out Udemy course", new Date("2025-03-05"));
todoList.addTodo("Write code", new Date("2025-03-10"));
todoList.addTodo("Go to Church in the evening", new Date("2025-03-02"));
todoList.listTodos(); //All the todos we added appear here
console.log("--------------------------------------------------------------");
console.log("Here, the ID chosen toggles from false to 'true'");
todoList.completeTodo(2); // Here, completed todos toggles to true.
todoList.listTodos(); // We check the todo array again confirm.
console.log("--------------------------------------------------------------");
todoList.removeTodo(1);
todoList.listTodos(); // The todo with the id called has been removed when we return all the todos.
console.log("--------------------------------------------------------------");
todoList.updateTodoTask(1, "Master TypeScript", new Date("2024-01-15"));
todoList.listTodos(); // Here, a task was chosen and modified.
console.log("--------------------------------------------------------------");
todoList.clearCompletedTodos();
console.log("After clearing completed todos:");
todoList.listTodos();
