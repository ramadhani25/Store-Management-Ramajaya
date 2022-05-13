import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  toggleSidebar: false,
  toggleProfile: false,
};

export const toggleButtonSlice = createSlice({
  name: "ToggleButton",
  initialState,
  reducers: {
    handleSidebar: (state) => {
      return {
        ...state,
        toggleSidebar: !state.toggleSidebar,
      };
    },
    handleProfile: (state) => {
      return {
        ...state,
        toggleProfile: !state.toggleProfile,
      };
    },
  },
});

export const { handleSidebar, handleProfile } = toggleButtonSlice.actions;
export default toggleButtonSlice.reducer;
