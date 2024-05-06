interface TodoItemProps {
  id: string
  title: string
  isCompleted: boolean
  deleteTodo: (id: string) => void
  toggleTodo: (id: string, isCompleted: boolean) => void
}

export default function TodoItem({
  id,
  title,
  isCompleted,
  deleteTodo,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={e => {
            toggleTodo(id, e.target.checked)
          }}
        />
        {title}
      </label>
      <button
        // NOTE: always pass a function using () =>, rather than directly using `deleteTodo`
        onClick={() => deleteTodo(id)}
        className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
