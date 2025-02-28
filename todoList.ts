interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
  }
  
  interface TodoItemWithDueDate extends TodoItem {
    dueDate: Date;
  }
  
  class TodoList {
    private todos: TodoItemWithDueDate[] = [];
    private nextId: number = 1;
  
   
    addTodo(task: string, dueDate: Date): void {
      const newTodo: TodoItemWithDueDate = {
        id: this.nextId++,
        task,
        completed: false,
        dueDate,
      };
      this.todos.push(newTodo);
    }

    completeTodo(id: number): void {
        let todo: TodoItemWithDueDate | undefined;
        for (const item of this.todos) {
          if (item.id === id) {
            todo = item;
            break;
          }
        }
        if (todo) {
          todo.completed = true;
        } else {
          console.log(`Todo with ID ${id} not found.`);
        }
      }
  
    removeTodo(id: number): void {
      const initialLength = this.todos.length;
      this.todos = this.todos.filter(todo => todo.id !== id);
      if (this.todos.length === initialLength) {
        console.log(`Todo with ID ${id} not found.`);
      }
    }
  
    listTodos(): void {
      this.todos.forEach(todo => {
        console.log(
          `ID: ${todo.id}, Task: ${todo.task}, Completed: ${todo.completed}, Due Date: ${todo.dueDate.toISOString().split('T')[0]}`
        );
      });
    }
  
    filterTodos(completed: boolean): TodoItemWithDueDate[] {
      return this.todos.filter(todo => todo.completed === completed);
    }
  
    updateTodoTask(id: number, newTask: string, newDueDate?: Date): void {
        let todoFound = false; // Flag to track if the todo is found
      
        for (const todo of this.todos) {
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
          console.log(`Todo with ID ${id} not found.`);
        }
      }
  
    clearCompletedTodos(): void {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  
  }
  
  const todoList = new TodoList(); //This  adds the todos
  todoList.addTodo("Learn TypeScript", new Date("2025-02-28"));
  todoList.addTodo("Check out Udemy course", new Date("2025-03-05"));
  todoList.addTodo("Write code", new Date("2025-03-10")); 
  todoList.addTodo("Go to Church in the evening", new Date("2025-03-02"))

  todoList.listTodos(); //All the todos we added appear here

  console.log("--------------------------------------------------------------");
  
  console.log("Here, the ID chosen toggles from false to 'true'")
  todoList.completeTodo(2); // Here, completed todos toggles to true.
  todoList.listTodos() // We check the todo array again confirm.

  console.log("--------------------------------------------------------------");

  todoList.removeTodo(1);

  todoList.listTodos() // The todo with the id called has been removed when we return all the todos.

  console.log("--------------------------------------------------------------");

  todoList.updateTodoTask(1, "Master TypeScript", new Date("2024-01-15")); 
  todoList.listTodos() // Here, a task was chosen and modified.
  
  console.log("--------------------------------------------------------------");
  
  console.log("After clearing completed todos:");
   todoList.clearCompletedTodos();
   todoList.listTodos();