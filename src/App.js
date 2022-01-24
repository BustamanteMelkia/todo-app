import { useEffect } from 'react';
import './App.css'
import Header from './components/layout/Header';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
import { getTodos } from './todos/infrastructure/todos.presenter';

function App() {
  useEffect(()=>{
    getTodos();
  }, []);
  
  return (
    <>
      <Header />
      <main className='todos'>
        <TodoForm />
        <TodoList />
      </main>
    </>
  );
}

export default App;
