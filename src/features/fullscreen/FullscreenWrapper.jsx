import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const selectFullscreen = state => state.ui.fullscreen;

export default function FullscreenWrapper ({ children }) {

    const fullscreen = useSelector(selectFullscreen);

    useEffect(() => {
        if(fullscreen)
            if(!document.fullscreenElement)
                document.documentElement.requestFullscreen();
        else if(document.exitFullscreen)
            document.exitFullscreen();
    }, [fullscreen])

    return <>{children}</>;

}