import { createContext, useContext, useReducer } from 'react';

const initialItems = [{ id: Date.now(), text: 'Apples', bought: false }];

const itemReducer = (state, action) => {
    switch (action.type) {
        case 
            'ADD_ITEM':
            return [
                { id: Date.now(), text: action.payload.text, bought: false },
                ...state,
            ];
        case 'UPDATE_ITEM':
            return state.map((item) => {
                if (item.id === action.payload.item.id) {
                    const { bought, text } = action.payload.item;
                
                return {
                    ...item, bought, text,
                };
                }
            })
        return item;
    }
}

const ItemContext = createContext();

export default function ItemProvider({ children }) {
  const [items, dispatch] = useReducer(itemReducer, initialItems);
  
  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };

  const handleUpdateItem = (item) => {
      dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  };

  return (
    <ItemContext.Provider
        value={{ items, handleAddItem, handleUpdateItem }} >
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
