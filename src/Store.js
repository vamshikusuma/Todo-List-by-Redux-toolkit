import { configureStore, createSlice} from "@reduxjs/toolkit"
const todo=[]

let useSlice = createSlice({
    name:'user',
    initialState:todo,
    reducers:{
    
            addTodo:(state,action)=>{
                state.push(action.payload)
            },
            deletetodo:(state,action)=>{
              return  state =state.filter((todo,index)=>index!==action.payload)
            },
            editTodo: (state, action) => {
                return state.map((todo, index) => (
                    index === action.payload.id
                    ? {todo:action.payload.title }
                    : todo
            
                ))
                
                
            
    },}
})
console.log(useSlice)
 const store =configureStore(
   {
    reducer:{
        user:useSlice.reducer
       }
   }
 )
 export let {addTodo,deletetodo,editTodo}=useSlice.actions
 export default store