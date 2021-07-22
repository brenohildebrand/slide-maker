import uiReducer from "../features/ui/uiSlice";
import slidesReducer from "../features/slides/slidesSlice";

export default function RootReducer (state = {}, action) {
    return {
        ui: uiReducer(state.ui, action),
        slides: slidesReducer(state.slides, action)
    }
}