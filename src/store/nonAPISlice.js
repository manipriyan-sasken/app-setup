import { createSlice } from "@reduxjs/toolkit";

const nonAPISlice = createSlice({
  name: "nonAPISlice",
  initialState: null,
  reducers: {
    getMenuList: () => {
      let list = [
        {
          name: "Dashboard",
          icon: "dash-menu.svg",
          path: "/vehicle-dashboard",
        },
        {
          name: "Alerts Support",
          icon: "alerts-menu.svg",
          path: "/alerts-support",
        },
      ];
      return list;
    },
  },
});

export const { getMenuList } = nonAPISlice.actions;

export default nonAPISlice.reducer;
