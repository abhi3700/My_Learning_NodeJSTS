import './styles.css'
import NewTodoForm from './NewTodoForm'
import { useState, useEffect } from 'react'
import TodoList from './TodoList'

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (!savedTodos) {
      return []
    }
    return JSON.parse(savedTodos)
  })

  // to print the todos as & when they change. So, no delay of the todos by 1 item as it's probably async function.
  // NOTE: hooks are always put at the top (after state, if any).
  useEffect(() => {
    console.log(JSON.stringify(todos, null, 4))
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(title: string) {
    // NOTE: Here, you should always pass a function like this rather than directly `return....`. Otherwise, it won't work.
    setTodos((currentTodos: Todo[]) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, isCompleted: false },
      ]
    })
  }
  function deleteTodo(id: string) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function toggleTodo(id: string, isCompleted: boolean) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted }
        }
        return todo
      })
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">TODO List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  )
}
