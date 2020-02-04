import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
};

const { actions, reducer } = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.setLoading = payload;
    },
  },
});

export const { setLoading } = actions;
export default reducer;
