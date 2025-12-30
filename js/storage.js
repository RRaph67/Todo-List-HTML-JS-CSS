import { rendertask } from "./ui.js"


const kunci = 'todoList' //id dari ul di html
export let todo = []

document.addEventListener('DOMContentLoaded', () => {
    const loadTodo = localStorage.getItem('todoList')
    todo = loadTodo ? JSON.parse(loadTodo) : []
    rendertask
})

export function saveTodo() {
    localStorage.setItem(kunci, JSON.stringify(todo))
}
