// import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      // Call Api to register.
      const data = await userAPi.register(payload);

      // Save data to local storage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

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
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

      //return user data.
      return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, 
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
