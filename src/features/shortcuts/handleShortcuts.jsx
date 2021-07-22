import shortcutsMap from "./shortcutsMap";

export default function handleShortcuts (event, dispatch) {

    const keyCode = event.code;
    const keyAction = shortcutsMap[keyCode];

    keyAction && keyAction(dispatch);

}