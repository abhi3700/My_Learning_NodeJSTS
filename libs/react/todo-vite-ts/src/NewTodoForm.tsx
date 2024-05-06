import { useState } from 'react'

export default function NewTodoForm({
  onSubmit,
}: {
  onSubmit: (item: string) => void
}) {
  const [newItem, setNewItem] = useState('')

  // NOTE: 'e' stands for Event emitted.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // this prevents the form from refreshing the page
    e.preventDefault()

    if (!newItem) return

    onSubmit(newItem)

    // clears the input form after submit/enter is pressed.
    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          id="item"
          type="text"></input>
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
