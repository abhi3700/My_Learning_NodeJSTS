import TodoItem from './TodoItem'

interface TodoListProps {
  todos: {
    id: string
    title: string
    isCompleted: boolean
  }[]
  deleteTodo: (id: string) => void
  toggleTodo: (id: string, isCompleted: boolean) => void
}

// create a exported default function
export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}: TodoListProps) {
  return (
    <ul className="list">
      {/* NOTE: This is called short-circuiting */}
      {todos.length === 0 && <p>No items</p>}
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )
      })}
    </ul>
  )
}
