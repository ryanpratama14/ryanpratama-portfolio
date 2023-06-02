"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface LanguageState {
  lang: string;
}

const initialState: LanguageState = {
  lang: localStorage.getItem("lang") || "en",
};

export const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload.value;
      localStorage.setItem("lang", action.payload.value);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
