import shortcutsMap from "./shortcutsMap";

export default function handleShortcuts (event, dispatch) {

    const keyCode = event.code;
    const keyAction = shortcutsMap[keyCode];

    console.log(`keyCode: ${keyCode}`);
    console.log(`keyAction: ${keyAction}`);
    console.log(`activeElement: ${document.activeElement}`);
    console.log(`target: ${event.target}`);

    keyAction && keyAction(dispatch);

}