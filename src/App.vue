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
          <th>{{ item.id }}</th>
          <td class="state">
            <!-- 状態変更ボタンのモック -->
            <button>{{ item.state }}</button>
          </td>
          <td class="button">
            <!-- 削除ボタンのモック -->
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/todoStorage';

@Component
export default class App extends Vue {
  private todos: TodoItem[] = []
}
</script>

<style>
</style>
