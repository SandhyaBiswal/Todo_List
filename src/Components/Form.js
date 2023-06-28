import React,{useEffect} from 'react';
import{v4 as uuidv4} from 'uuid'

const Form = ({input,setInput,todos,setTodos, edittodo, setEdittodo}) => {
       const updateTodo=(title, id, completed)=>{
        const newTodo= todos.map((todo)=>
          todo.id=== id ? {title, id, completed} : todo 
        )
        setTodos(newTodo);
        setEdittodo("");
       };

       useEffect(()=>{
        if(edittodo){
          setInput(edittodo.title)
        }else{
          setInput('')
        }
       },[setInput,edittodo])

    const onInputChange=(event)=>{
      console.log(input);
      setInput(event.target.value);
    }

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!edittodo){
          setTodos([...todos,{id: uuidv4(), title:input, completed:false}]);
          setInput("");
        }else{
          updateTodo(input,edittodo.id,edittodo.completed)
        }
        
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter a Todo...'  className='task-input' value={input} 
        required onChange={onInputChange}></input>
        <button className='button-add ' type='submit'>Add</button>
    </form>
  );
}

export default Form;
