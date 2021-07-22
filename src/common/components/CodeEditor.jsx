import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-nord_dark';
import styles from './CodeEditor.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const selectSlidesContent = state => state.slides.content;
const selectCurrentIndex = state => state.slides.currentIndex;

export default function CodeEditor () {

    const dispatch = useDispatch();

    const slidesContent = useSelector(selectSlidesContent);
    const currentIndex = useSelector(selectCurrentIndex);

    const [currentMode, setCurrentMode] = useState('html');

    const handleAceEditorOnChange = ( newValue ) => {
        dispatch({
            type: `slides/update${currentMode}`,
            payload: newValue
        })
    }

    return (
        <section className={styles.CodeEditor}>
            <div>
                <div onClick={() => setCurrentMode('html')}>
                    <p>html</p>
                </div>
                <span></span>
                <div onClick={() => setCurrentMode('css')}>
                    <p>css</p>
                </div>
                <span></span>
                <div onClick={() => setCurrentMode('javascript')}>
                    <p>javascript</p>
                </div>
            </div>
            <div>
                <AceEditor 
                    mode={currentMode}
                    theme='nord_dark'
                    value={slidesContent[currentIndex][currentMode]}
                    onChange={handleAceEditorOnChange}
                    fontSize='18px'
                    height='100%'
                    width='100%'
                    setOptions={{
                        tabSize: 4,
                    }}
                />
            </div>
        </section>
    );

}