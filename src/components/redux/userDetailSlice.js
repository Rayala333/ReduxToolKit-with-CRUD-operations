import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const initialState = {
    loading:false,
    users:[],
    error:null,
    searchData:[]
}

//create action form posting data

export const createUser = createAsyncThunk("createUser", async(data,{rejectWithValue})=>{
        const response = await axios.post('http://localhost:3005/users',data);
        try{
            const result = await response.data
            // console.log(result,"Form")
            return result
        }catch(error){
                return rejectWithValue(error)
        }
})

//create action form reading data

export const showUser = createAsyncThunk("showUser", async(rejectWithValue)=>{
    const response = await axios.get('http://localhost:3005/users') ;
    try{
        const result1 = await response.data
        return result1
    }catch(error){
            return rejectWithValue(error)
    }
})

// delete user action

export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    const response = await axios.delete(`http://localhost:3005/users/${id}`);
    try{
        if(response){
            const result2 = {id}
            console.log(result2,"result")
            return result2
        }
        
    }catch(error){
            return rejectWithValue(error)
    }
})

//update user updateUser

export const updateUser = createAsyncThunk("updateUser", async(data,{rejectWithValue})=>{
    console.log(data,"up")
    const response = await axios.put(`http://localhost:3005/users/${data.id}`,data);
    try{
        const result = await response.data
        console.log(result,"update")
        return result
    }catch(error){
            return rejectWithValue(error)
    }
})






// creating Slices
export const userDetail = createSlice({
    name:"userDetails",
    initialState:initialState,
    reducers :{
        searchUser : (state,action)=>{
                state.searchData = action.payload
        }
    },
    // extraReducers:{
    //     [createUser.pending]:(state,action)=>{
    //             state.loading=true
    //     },
    //     [createUser.fulfilled]:(state,action)=>{
    //         state.loading=false;
    //         state.users.push(action.payload)
    //     },
    //     [createUser.rejected]:(state,action)=>{
    //         state.loading=false;
    //         state.error = action.payload
    //     },
    //     //show user
    //     [showUser.pending]:(state,action)=>{
    //             state.loading=true
    //     },
    //     [showUser.fulfilled]:(state,action)=>{
    //         state.loading=false;
    //         state.users = action.payload
    //     },
    //     [showUser.rejected]:(state,action)=>{
    //         state.loading=false;
    //         state.error = action.payload
    //     },
    // }
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading=false;
            console.log(action.payload,"payload")
            state.users.push(action.payload)
        });
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.payload
        });

        //showUser
        builder.addCase(showUser.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(showUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users = action.payload
        });
        builder.addCase(showUser.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.payload
        });

        //delete user

        builder.addCase(deleteUser.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.loading=false;
            const {id} = action.payload
            
            if(id){
                state.users = state.users.filter((e,i)=>e.id!==id)
            }
        });
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.loading=false;
            // state.error = action.payload
            console.log(action.payload)
        });

        //update user

        builder.addCase(updateUser.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(updateUser.fulfilled,(state,action)=>{
            state.loading=false;
            console.log(action.payload,"payload")
            // state.users.push(action.payload)
            state.users = state.users.map((ele,i)=>(
                ele.id === action.payload.id? action.payload : ele
            ))
        });
        builder.addCase(updateUser.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.payload
        });
        
    }

})

export default userDetail.reducer;

export const {searchUser} = userDetail.actions;