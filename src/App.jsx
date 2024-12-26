import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo} from './Store';
import List from './List';
import './index.css'

function App() {
  const [todo, setTodo] = useState('')
  
  let dispatch =useDispatch();
 let data=useSelector((state)=>state.user)
 console.log(data)

  let onChangeHandler = e =>setTodo(e.target.value);
  
   return (
    <>  <br /> 
    <center className='min-h-72 bg-slate-400 ml-72 mr-72 rounded-xl' > <br /> 
    <h2 className='font-semibold text-2xl'>To-Do List</h2> <br />
    <div ><form> 
      
      <input type="text"  className='rounded-md font-semibold text-2xl' onChange={onChangeHandler} value={todo}/> <br />
       <br />
     <button className='bg-blue-600 text-white font-semibold rounded-md p-2 pl-4 pr-4' onClick={(e)=>{ e.preventDefault()
        dispatch(addTodo({todo:todo}))
         setTodo('')}}>Add</button>
    
     </form>
    
    </div>  
    <br />
    <div className='flex flex-col items-center pb-8'>
    {
      data.map((todo,index)=><List todo={todo.todo} id={index} key={index} ></List>

      )
    }
    </div>
    </center>

    </>
  )
}

export default App
