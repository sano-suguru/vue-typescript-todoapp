<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: todoを１行ずつ繰り返し表示したい -->
        <tr v-for="todo in todos" :key="todo.id">
          <th>{{ todo.id }}</th>
          <td>{{ todo.name }}</td>
          <td class="state">
            <!-- 状態変更ボタンのモック -->
            <button>{{ todo.done }}</button>
          </td>
          <td class="button">
            <!-- 削除ボタンのモック -->
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>新しい作業の追加</h2>
    <form class="add-item" @submit.prevent="addTodo">
      コメント <input type="text" ref="name">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import TodoStorage, { TodoItem } from '@/todoStorage';

const todoStorage = new TodoStorage()

@Component
export default class App extends Vue {
  private todos: TodoItem[] = []

  private addTodo() {
    const name = this.$refs.name as HTMLInputElement
    if (!name.value.length) {
      return
    }
    this.todos.push({
      id: todoStorage.nextId,
      name: name.value,
      done: false
    })
    name.value = ''
  }

  @Watch('todos', { deep: true })
  private onTodoChanged(todos: TodoItem[]) {
    todoStorage.save(todos)
  }
}
</script>

<style>
</style>
