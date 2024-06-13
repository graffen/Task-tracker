import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTaskComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    reorderTasks: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removedTask] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removedTask);
    },
  },
});

export const { addTask, deleteTask, toggleTaskComplete, reorderTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
