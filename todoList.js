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
    // completeTodo(id: number): void {
    //   const todo = this.todos.find(todo => todo.id === id);
    //   if (todo) {
    //     todo.completed = true;
    //   } else {
    //     console.log(`Todo with ID ${id} not found.`);
    //   }
    // }
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
    // updateTodoTask(id: number, newTask: string, newDueDate?: Date): void {
    //   const todo = this.todos.find(todo => todo.id === id);
    //   if (todo) {
    //     todo.task = newTask;
    //     if (newDueDate) {
    //       todo.dueDate = newDueDate;
    //     }
    //   } else {
    //     console.log(`Todo with ID ${id} not found.`);
    //   }
    // }
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
var todoList = new TodoList();
todoList.addTodo("Learn TypeScript", new Date("2023-12-31"));
todoList.addTodo("Check out Udemy course", new Date("2023-11-15"));
todoList.addTodo("Write code", new Date("2023-10-30"));
console.log("Initial Todos:");
todoList.listTodos();
todoList.updateTodoTask(1, "Master TypeScript", new Date("2024-01-15"));
todoList.completeTodo(3);
console.log("Updated Todos:");
todoList.listTodos();
todoList.clearCompletedTodos();
console.log("After clearing completed todos:");
todoList.listTodos();
