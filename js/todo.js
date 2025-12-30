import { saveTodo } from "./storage.js"
import { todo } from "./storage.js"

export function addTodo(task, status) {
    status = '❌ Belum Dikerjakan'
    todo.push({ task: task, status: status })
    saveTodo
}

export function completeTod(index) {
    todo[index].status = '✔️ Sudah Dikerjakan'
    saveTodo()
}

export function deleteTod(index) {
    todo.splice(index, 1)
    saveTodo()
}
