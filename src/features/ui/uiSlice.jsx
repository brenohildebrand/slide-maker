export default function uiSlice (state = {
    activeInterface: 'main',
    showing: {
        icons: true,
        tutorial: false,
        codeEditor: false,
    }  
}, action) {

    switch(action.type) {
        case "ui/mainActivated":
        case "ui/menuActivated":
        case "ui/showingIcons":
        case "ui/hidingIcons":
        case "ui/showingTutorial":
        case "ui/hidingTutorial":
        case "ui/showingCodeEditor":
        case "ui/hidingCodeEditor":
        default:
            return;
    }

}