#! /usr/bin/env node
import inquirer from "inquirer";

let todos : string [] = [];
let condition = true;

while (condition) {
    let ans = await inquirer.prompt([
     { 
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: ["Add Task","update","view Todo List","delete","exit"],

     }
        
   ]);
   if(ans.select === "Add Task"){
    let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add items in the list",
        validate: function (input){
             if(input.trim () == ""){
                 return "Please enter a non-empty item."
            }
             return true;
        }
     })
     if(addTodo.todo.trim () !== ""){
        todos.push(addTodo.todo);
        todos.forEach (todo => console.log(todo)
    )
    }
   }
    if(ans.select === "update"){
        let updatedTodo = await inquirer.prompt({
            name : "todo",
            type: "list",
            message: "Update items in the list",
            choices: todos.map (item => item)
        })
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add items in the list",
        })
        let newTodo = todos.filter(val =>val !== updatedTodo.todo);
        todos =[ ...newTodo , addTodo .todo];
        todos.forEach(todo => console.log(todo)
    )
    }
    if(ans.select === "view Todo List"){
        console.log( "*****To-Do-List*****");
        todos.forEach(todo => console.log(todo))
    }
    if(ans.select === "delete"){
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Select item to delete",
            choices: todos.map(item => item)
        })
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos =[ ...newTodo];
        todos.forEach(todo => console.log(todo)
    )
     }
    if(ans.select === "exit"){
        console.log("Exite program...");
        condition = false;
     }
   
}


