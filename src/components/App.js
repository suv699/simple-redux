import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CounterComponent from '../containers/CounterComponent';
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    
    <CounterComponent />
  </div>
)
export default App