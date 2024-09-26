import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name:"counter",
  initialState:{counterVal:0
},
reducers:{
  increment:(state)=>{
state.counterVal++
},
decrement:(state)=>{
  {state.counterVal >0 ? state.counterVal--:0}
},
addition: (state,action) => {
  state.counterVal += Number(action.payload)
},
subtraction : (state,action) => {
  state.counterVal -= Number(action.payload)
}
}
}
)

export const counterAction = counterSlice.actions
export default counterSlice