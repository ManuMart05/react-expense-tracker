import { createContext } from 'react';

// Initial state
export const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

// Create context
export const GlobalContext = createContext(initialState);
