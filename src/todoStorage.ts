export interface TodoItem {
  id: number
  name: string
  done: boolean
}

interface Storable {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

const STORAGE_KEY = 'vue-ts-todoapp'

export default class TodoStorage {
  get nextId(): number {
    return this.fetchAll().length
  }

  constructor(
    private storage: Storable = localStorage
  ) { }

  public fetchAll() {
    const todos = JSON.parse(
      this.storage.getItem(STORAGE_KEY) || '[]'
    ) as TodoItem[]
    return todos.map((todo, index) => todo.id = index);
  }

  public save(todos: TodoItem[]) {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
