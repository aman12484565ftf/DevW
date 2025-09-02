import { createSlice } from "@reduxjs/toolkit";
const requestSlice=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>action.payload,
        removeRequest:(state,action)=>state=>{
            // const newArray=state.filter((r)=>r._id!==action.payload);
            // return newArray;
                 return state.filter((r) => r._id !== action.payload);
        }
    }
});
export const{addRequests,removeRequest}=requestSlice.actions;
export default requestSlice.reducer;