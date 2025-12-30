import { todo } from "./storage.js"
import { addTodo } from "./todo.js"
import { rendertask } from "./ui.js"

const taskInp = document.getElementById('taskInput') //panggil id dari elemen html
const addBtn = document.getElementById('addBtn') //panggil id dari elemen html
const all = document.getElementById('all') //panggil id dari elemen html
const done = document.getElementById('done') //panggil id dari elemen html
const pending = document.getElementById('pending') //panggil id dari elemen html

all.addEventListener('click', () => {
    rendertask(todo)
})

done.addEventListener('click', () => {
    const selesai = todo.filter((item) => { return item.status.includes('✔️ Sudah Dikerjakan') })
    rendertask(selesai)
})

pending.addEventListener('click', () => {
    const belum = todo.filter((item) => { return item.status.includes('❌ Belum Dikerjakan') })
    rendertask(belum)
})

addBtn.addEventListener('click', () => {
    if (!taskInp.value.trim()) {
        alert('Input tidak valid! coba lagi')
    } else {
        addTodo(taskInp.value)
        rendertask()
    }
})
