import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Learn pinia", isFav: false},
            {id: 2, title: "Watch Harvard CS50 lectures", isFav: true},
            {id: 3, title: "Practice Typescript", isFav: false},
            {id: 4, title: "Play with CSS", isFav: true},
            {id: 5, title: "Find new challenges", isFav: true}
        ]
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter (t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find (t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})