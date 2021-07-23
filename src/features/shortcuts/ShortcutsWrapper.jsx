import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { next, previous, setIndexToZero } from '../slides/slidesSlice';
import { 
    toggleCodeEditor, 
    toggleCurrentPage, 
    toggleFullscreen, 
    toggleIcons, 
    toggleTutorial,
    present, 
} from '../ui/uiSlice';

export default function ShortcutsWrapper ({ children }) {

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', (event) => handleShortcuts(event));
        return () => window.removeEventListener('keydown', (event) => handleShortcuts(event));
    }, []);

    function handleShortcuts (event) {

        const keyCode = event.code;
        const keyAction = shortcutsMap[keyCode];
        
        /* Block input from the AceEditor textarea */
        const targetName = event.target.localName;
        if(targetName === 'textarea') return;

        if(keyAction) keyAction(event);
    }

    const shortcutsMap = {
        KeyT: () => {
            dispatch(toggleTutorial());
        },
        KeyC: () => {
            dispatch(toggleCodeEditor());
        },
        KeyM: () => {
            dispatch(toggleCurrentPage());
        },
        KeyF: () => {
            dispatch(toggleFullscreen());
        },
        KeyP: () => {
            dispatch(setIndexToZero());
            dispatch(present());
        },
        KeyH: () => {
            dispatch(toggleIcons());
        },
        ArrowRight: () => dispatch(next()),
        ArrowLeft: () => dispatch(previous()),
    }

    return <>{children}</>;

}