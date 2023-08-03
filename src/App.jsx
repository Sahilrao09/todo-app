import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItem = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItem);
  }

  function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItem = [...items, input.value];
    setItems(newItem);
    form.reset();
  }

  return (
    <div>
      <h2>Your TODO List</h2>
      <div className="shopping-list">
        <h4>Task(s)</h4>
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="item"
            placeholder="Add your tasks in here"
            required
          />
          <button>add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}

export default App;
