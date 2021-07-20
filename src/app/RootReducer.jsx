import uiSlice from "../features/ui/uiSlice";
import slidesSlice from "../features/slides/slidesSlice";

export default function RootReducer (state = {}, action) {
    return {
        ui: uiSlice(state.shortcuts, action),
        slides: slidesSlice(state.slides, action)
    }
}