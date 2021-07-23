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
        toggleTutorial(state, action) {
            state.isShowing.tutorial = !state.isShowing.tutorial;
        },
        toggleCodeEditor(state, action) {
            state.isShowing.codeEditor = !state.isShowing.codeEditor;
        },
        toggleFullscreen(state, action) {
            state.fullscreen = !state.fullscreen;
        },
        present(state, action) {
            state.fullscreen = true;
            state.isShowing.icons = false;
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
    present,
} = uiSlice.actions;

export default uiSlice.reducer;