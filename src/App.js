import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import { ThemeProvider, useTheme } from './themeContext';
import styles from './App.module.scss';

const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.app} ${theme === 'light' ? styles.light : styles.dark}`}>
      <Header />
      <main>
        <TaskForm />
        <TaskList />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
