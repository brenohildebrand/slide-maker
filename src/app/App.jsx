import React from 'react'
import { useSelector } from 'react-redux';
import CodeEditor from '../common/components/CodeEditor';
import MainIcons from '../common/components/MainIcons';
import MenuIcons from '../common/components/MenuIcons';
import Slides from '../common/components/Slides';
import SlidesGrid from '../common/components/SlidesGrid';
import Tutorial from '../common/components/Tutorial';

const selectCurrentPage = state => state.ui.currentPage;
const selectIsShowingIcons = state => state.ui.isShowing.icons;
const selectIsShowingTutorial = state => state.ui.isShowing.tutorial;
const selectIsShowingCodeEditor = state => state.ui.isShowing.codeEditor;

export default function App () {

    /*
        App has two pages:
            * The Main
            * The Menu
        It shows whatever is the "current" one
    */

    const currentPage = useSelector(selectCurrentPage);
    const isShowingIcons = useSelector(selectIsShowingIcons);
    const isShowingTutorial = useSelector(selectIsShowingTutorial);
    const isShowingCodeEditor = useSelector(selectIsShowingCodeEditor);

    switch (currentPage) {
        case 'main':
            return (
                <>
                    <Slides />
                    { isShowingIcons && <MainIcons/> }
                    { isShowingTutorial && <Tutorial/> }
                    { isShowingCodeEditor && <CodeEditor/> }
                </>
            );
        case 'menu':
            return (
                <>
                    {isShowingIcons && <MenuIcons/>}
                    <SlidesGrid />
                </>
            );
        default: 
            return null;
    }
}