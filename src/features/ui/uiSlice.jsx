import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        currentPage: 'main',
        fullscreen: false,
        isShowing: {
            icons: true,
            tutorial: false,
            codeEditor: false,
        }
    },
    reducers: {
        toggleCurrentPage(state, action) {
            if(state.currentPage === 'main') state.currentPage = 'menu';
            else if(state.currentPage === 'menu') state.currentPage = 'main';
        },
        toggleIcons(state, action) {
            state.isShowing.icons = !state.isShowing.icons;
        },
        hideIcons(state, action) {
            state.isShowing.icons = false;
        },
        toggleTutorial(state, action) {
            state.isShowing.tutorial = !state.isShowing.tutorial;
        },
        toggleCodeEditor(state, action) {
            state.isShowing.codeEditor = !state.isShowing.codeEditor;
        },
        toggleFullscreen(state, action) {
            state.fullscreen = !state.fullscreen;
        },
        setFullscreen(state, action) {
            state.fullscreen = true;
        }
    }
});

export const {
    toggleCurrentPage,
    toggleIcons,
    hideIcons,
    toggleTutorial,
    toggleCodeEditor,
    toggleFullscreen,
    setFullscreen
} = uiSlice.actions;

export default uiSlice.reducer;