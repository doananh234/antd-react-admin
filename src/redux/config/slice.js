import { createSlice, createAction } from '@reduxjs/toolkit';

export const initialState = {};

const { actions, reducer } = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    getConfigSuccess: (state, { payload }) => {
      state.data = payload;
    },
    getConfigFailure: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const getConfig = createAction('Config/getConfig');
export const { getConfigSuccess, getConfigFailure } = actions;
export default reducer;
