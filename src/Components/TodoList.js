import React from 'react';

const TodoList = ({todos, setTodos,setEdittodo}) => {
    const handleEdit=({id})=>{
        const findTodo=todos.find((todos)=> todos.id === id)
        setEdittodo(findTodo);
    }
    
  const handleComplete=(todos)=>{
    setTodos(
        todos.map((item)=>{
            if(item.id===todos.id){
                return {...item, completed:!item.completed}
            }
            return item;
        })
    )
  }

    const handleDelete=({id})=>{
        setTodos(todos.filter((todos)=> todos.id !== id))
    }
  return (
    
    <div>
      {todos.map((todos)=>
         (
          
          <li className='list-item' key={todos.id}>
               <input type='text' value={todos.title} className='list'
                onChange={(event)=> event.preventDefault()}/>
                <div className='mb-10'>
                  <button className='button-complete task-button' onClick={()=>handleComplete(todos)}>
                  <i class="fa-regular fa-circle-check"></i>
                  </button>
                  <button className='button-edit task-button' onClick={()=>handleEdit(todos)}>
                  <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className='button-delete task-button' onClick={()=> handleDelete(todos)}>
                  <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
          </li>
         
        )
      )}
    </div>
  );
}

export default TodoList;
