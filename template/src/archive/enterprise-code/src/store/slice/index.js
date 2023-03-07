import {createSlice} from '@reduxjs/toolkit';
import initialState from '../initialStates/index';

const userSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    stopLoader: state => {
      state.isLoading = false;
    },
    userLocation: (state, action) => {
      state.location.latitude = action.payload.latitude;
      state.location.longitude = action.payload.longitude;
    },
    setProfile: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    deleteUser: (state, action) => {
      const res = state.users.filter(user => user.id !== action.payload.id);
      state.users = res;
    },
  },
});

const actions = userSlice.actions;
const reducers = userSlice.reducer;
export {actions, reducers};
