// import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPi from 'api/userApi';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      // Call Api to register.
      const data = await userAPi.register(payload);

      // Save data to local storage
      localStorage.setItem('access_token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      //return user data.
      return data.user;
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
      // Call Api to register.
      const data = await userAPi.login(payload);

      // Save data to local storage
      localStorage.setItem('access_token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      //return user data.
      return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:{},
        settings:{},
    },
    reducers: {},
    extraReducers:{
        [register.fulfilled]: (state, action) =>{
            state.current = action.payload;
        },
        
        [login.fulfilled]: (state, action) =>{
            state.current = action.payload;
        }
    }
});

const {reducer } = userSlice;
export default reducer; // default export
