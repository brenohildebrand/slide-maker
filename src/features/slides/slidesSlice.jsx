import { createSlice } from "@reduxjs/toolkit";

const slidesSlice = createSlice({
    name: 'slides',
    initialState: {
        currentIndex: 0,
        length: 1,
        content: [{
            html: '',
            css: '',
            javascript: ''
        }]
    },
    reducers: {
        add(state, action) {
            state.content.push({
                html: '',
                css: '',
                javascript: ''
            });
            state.length += 1;
            state.currentIndex = state.length - 1;
        },
        remove(state, action) {
            const currentIndex = state.currentIndex;

            state.content.splice(currentIndex, 1);
            state.length -= 1;
        },
        updatehtml(state, action) { 
            const newValue = action.payload;
            const currentIndex = state.currentIndex;

            state.content[currentIndex].html = newValue;
        },
        updatecss(state, action) {
            const newValue = action.payload;
            const currentIndex = state.currentIndex;

            state.content[currentIndex].css = newValue;
        },
        updatejavascript(state, action) {
            const newValue = action.payload;
            const currentIndex = state.currentIndex;

            state.content[currentIndex].javascript = newValue;
        },
        next(state, action) {
            if(state.currentIndex + 1 >= state.length) return state;
            state.currentIndex += 1;
        },
        previous(state, action) {
            if(state.currentIndex - 1 < 0) return state;
            state.currentIndex -= 1;
        },
        setIndexToZero(state, action) {
            state.currentIndex = 0;
        }
    }
});

export const {add, remove, updatehtml, updatecss, updatejavascript, next, previous, setIndexToZero} = slidesSlice.actions;

export default slidesSlice.reducer;