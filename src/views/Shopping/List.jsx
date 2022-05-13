import { useState } from 'react';
import Item from '../../components/Item/Item';
import { useItems } from '../../context/ItemProvider';


export default function List() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem, handleUpdateItem, handleDeleteItem } = useItems();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      handleAddItem(newItem);
      setNewItem('');
  }

  return (
    <>
    <h1>Shopping List</h1>
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            name='newItem'
            placeholder='Add item to shopping list'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    <ul>
        {items.map((item) => (
           <li key={item.id}>
               <Item
                  item={item} 
                  onUpdate={handleUpdateItem}
                  onDelete={handleDeleteItem} />

           </li> 
        ))}
    </ul>
    </>
  )
}
