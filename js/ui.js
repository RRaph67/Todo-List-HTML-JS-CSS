import { todo } from "./storage.js"
import { completeTod, deleteTod } from "./todo.js"

const todoList = document.getElementById('todoList') //pemanggilan id 'ul' di index.html

export function rendertask(list=todo) {
    todoList.innerHTML = ''
    
    if (list.length == 0) {
        const detail = document.createElement('p')
        detail.innerHTML = 'Belum ada to do list!'
        todoList.appendChild(detail)
        return
    } else {
        for (let i = 0; i < list.length; i++) {
            const newLi = document.createElement('li')
            const btnHps = document.createElement('button')
            const btnDone = document.createElement('button')

            btnHps.classList.add('btn-hps')
            btnDone.classList.add('btn-done')
            
            newLi.textContent = `Tugas "${list[i].task}" - "${list[i].status}"`

            btnDone.textContent = 'Selesai'
            btnDone.addEventListener('click', () => {
                const oriIndex = todo.findIndex((index) => { return index.task === list[i].task && index.status === list[i].status })
                if (oriIndex !== -1) {
                    completeTod(oriIndex)
                    rendertask()
                }
            })

            btnHps.textContent = 'Hapus'
            btnHps.addEventListener('click', () => {
                const oriIndex = todo.findIndex((index) => { return index.task == list[i].task && index.status == list[i].status })
                if (oriIndex !== -1) {
                    deleteTod(oriIndex)
                    rendertask()
                }
            })

            newLi.appendChild(btnDone)
            newLi.appendChild(btnHps)
            todoList.appendChild(newLi)
        }
    }
}
