import React,{useEffect, useState} from 'react';
import Header from './Components/Header';
import './App.css'
import Form from './Components/Form';
import TodoList from './Components/TodoList';


const App = () => {
  const initialState= JSON.parse(localStorage.getItem('todos')) || [];
  const[input, setInput]= useState("");
  const[todos,setTodos]= useState(initialState);
  const[edittodo, setEdittodo]=useState(null)

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
  return (
    <div className='container'>
       <div className='app-wrapper'>
         <div>
          <Header></Header>
         </div>
         <div>
          <Form input = {input} setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edittodo={edittodo}
            setEdittodo={setEdittodo}>
          </Form>
         </div>
         <div>
          <TodoList todos={todos} setTodos={setTodos} setEdittodo={setEdittodo} />
         </div>
       </div>
    </div>
  );
}

export default App;
