import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ToDoApp } from './components/TodoApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ToDoApp></ToDoApp>
  </React.StrictMode>,
)
