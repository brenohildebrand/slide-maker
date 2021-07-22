import { next, previous } from "../slides/slidesSlice";

const shortcutsMap = {
    ArrowRight: (dispatch) => dispatch(next()),
    ArrowLeft: (dispatch) => dispatch(previous()),
}

export default shortcutsMap;