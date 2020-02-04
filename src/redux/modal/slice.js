import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
};

const { actions, reducer } = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.current = payload;
    },
    closeModal: state => {
      state.current = null;
    },
  },
});

export const { showModal, closeModal } = actions;
export default reducer;
