import { createSlice } from "@reduxjs/toolkit"
const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{ 
            return action.payload;
        },
        removeUserFromFeed:(state,action)=>{
            const newFeed=state.filter((user)=>user._id!==action.payload);
            return newFeed;
            // action.payload is the id we send a
        },
    },

})
export const{addFeed,removeUserFromFeed}=feedSlice.actions;
export default feedSlice.reducer;
