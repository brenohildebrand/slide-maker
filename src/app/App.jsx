import React from 'react'

export default function App () {

    /*
        App has two macro interfaces:
            * The Main
            * The Menu
        It shows whatever is active
    */

    switch (activeInterface) {
        case 'main':
            return (
                <>
                    <Slides />
                    { isShowingIcons && <MainIcons/> }
                    { isShowingTutorial && <Tutorial/> }
                    { isShowingCodeEditor && <CodeEditor /> }
                </>
            );
        case 'menu':
            return (
                <>
                    {isShowingIcons && <MenuIcons />}
                    <SlidesGrid />
                </>
            );
        default: 
            return null;
    }
}