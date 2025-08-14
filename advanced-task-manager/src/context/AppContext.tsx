import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state of the application
const initialState = {
    tasks: [],
    theme: 'light', // light or dark mode
};

// Create a context for the app
const AppContext = createContext(initialState);

// Define action types
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_THEME = 'TOGGLE_THEME';

// Create a reducer function to manage state updates
const appReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        case TOGGLE_THEME:
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
};

// Create a provider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Create a custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};