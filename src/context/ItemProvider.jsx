import { createContext, useContext, useReducer } from 'react';

const initialItems = [{ id, text: 'Apples', bought: false }];

const itemReducer = (state, action) => {
    switch (action.type) {
        case 
            'ADD_ITEM':
            return [
                { id, text: action.payload.text, bought: false },
                ...state,
            ];
        return item;
    }
}

const ItemContext = createContext();

export default function ItemProvider({ children }) {
  const [items, dispatch] = useReducer(itemReducer, initialItems);
  
  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };

  return (
    <ItemContext.Provider
        value={{ items, handleAddItem }} >
            {children}
        </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);

  if (context === undefined)
    throw new Error('useItems must be used inside a ItemProvider');
  return context;
}
