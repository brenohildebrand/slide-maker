import shortcutsMap from "./shortcutsMap";

export function handleShortcuts (event) {

    const keyCode = event.code;
    const keyAction = shortcutsMap[keyCode];

    keyAction && keyAction();

}