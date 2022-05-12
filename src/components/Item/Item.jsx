import { useState } from 'react';

export default function Item({ item, onUpdate }) {
  const [editing, setEditing] = useState(false);

  let content;
  
  if (editing) {
    content = (
        <form
    onSubmit={(event) => {
      event.preventDefault();
      setEditing(false);
    }}
  >
   <input
          value={item.text}
          aria-label='Edit'
          onChange={(e) => {
              onUpdate({
                  ...item, text: e.target.value,
              });
          }}
          />  
          <button type='submit' aria-label='Save'>
              Save
              </button> 
  </form>
    );
  } else {
      content = (
          <>
          <p style={{ textDecoration: item.bought ? 'line-through' : null }}>{item.text}</p>
          <button
            type='button'
            onClick={() => setEditing(true)}
            aria-label={`Edit ${item.text}`}>Edit</button>
          </>
      );
  }
    
  return (
    <div>
    <input
        type='checkbox'
        checked={item.bought}
        onChange={(e) => {
            onUpdate({
                ...item,
                bought: e.target.checked,
            });
        }}
        />
    {content}
    </div>
  )
}
