import { next } from "../slides/slidesSlice";

const shortcutsMap = {
    Escape: (dispatch) => {},
    ArrowLeft: (dispatch) => dispatch(next()),
    ArrowRight: (dispatch) => dispatch(previous()),
}

export default shortcutsMap;