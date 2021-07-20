export default function slidesSlice (state = [], action) {
    switch(action.type){
        case "slides/create":
        case "slides/delete":
        case "slides/updateHTML":
        case "slides/updateCSS":
        case "slides/updateJS":
        default:
            return state;
    }
}