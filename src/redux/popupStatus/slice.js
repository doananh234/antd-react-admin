import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  popupStatus: {},
};

const { actions, reducer } = createSlice({
  name: 'Popup',
  initialState,
  reducers: {
    togglePopup: (state, { payload }) => {
      state[payload] = !state.popupStatus[payload];
    },
  },
});

export const { togglePopup } = actions;
export default reducer;
