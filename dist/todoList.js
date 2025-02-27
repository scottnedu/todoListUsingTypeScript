"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    // completeTodo(id: number): void {
    //   const todo = this.todos.find(todo => todo.id === id);
    //   if (todo) {
    //     todo.completed = true;
    //   } else {
    //     console.log(`Todo with ID ${id} not found.`);
    //   }
    // }
    completeTodo(id) {
        let todo;
        for (const item of this.todos) {
            if (item.id === id) {
                todo = item;
                break;
            }
        }
        if (todo) {
            todo.completed = true;
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    removeTodo(id) {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);
        if (this.todos.length === initialLength) {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    listTodos() {
        this.todos.forEach(todo => {
            console.log(`ID: ${todo.id}, Task: ${todo.task}, Completed: ${todo.completed}, Due Date: ${todo.dueDate.toISOString().split('T')[0]}`);
        });
    }
    filterTodos(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
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
    updateTodoTask(id, newTask, newDueDate) {
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
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}
const todoList = new TodoList();
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
