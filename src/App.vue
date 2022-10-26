<template>
  <div>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favs Tasks</button>
    </nav>

    <div>
      <div class="task-list" v-if="filter === 'all'">
        <p>{{ taskStore.totalCount }} tasks</p>
        <div v-for="task in taskStore.tasks">
          <TaskDetails :task="task"/>
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <p>{{ taskStore.favCount }} tasks</p>
        <div v-for="task in taskStore.favs">
          <TaskDetails :task="task"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'
  import { useTaskStore } from './stores/TaskStore'

  export default {
    components: {
      TaskDetails,
      TaskForm
    },
    setup () {
      const taskStore = useTaskStore()
      const filter = ref('all')

      return { taskStore, filter }
    }
  }
</script>