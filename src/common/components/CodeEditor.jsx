import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-nord_dark';
import styles from './CodeEditor.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createAutosave } from '../../features/autosave/autosave';
import localStorage from '../../features/storage/storageAPI';

const selectSlides = state => state.slides;

export default function CodeEditor () {

    const dispatch = useDispatch();

    const slides = useSelector(selectSlides);
    const { content, currentIndex } = slides;

    const [currentMode, setCurrentMode] = useState('html');

    const autosave = createAutosave(() => {
        localStorage.setItem('slides', slides);
    });

    const handleAceEditorOnChange = ( newValue ) => {
        dispatch({
            type: `slides/update${currentMode}`,
            payload: newValue
        });
    }

    return (
        <section className={styles.CodeEditor}>
            <div>
                <div onClick={() => setCurrentMode('html')} className={currentMode === 'html'? styles.selected : null}>
                    <p>html</p>
                </div>
                <span></span>
                <div onClick={() => setCurrentMode('css')} className={currentMode === 'css'? styles.selected : null}>
                    <p>css</p>
                </div>
                <span></span>
                <div onClick={() => setCurrentMode('javascript')} className={currentMode === 'javascript'? styles.selected : null}>
                    <p>javascript</p>
                </div>
            </div>
            <div>
                <AceEditor 
                    mode={currentMode}
                    theme='nord_dark'
                    value={content[currentIndex][currentMode]}
                    onChange={handleAceEditorOnChange}
                    onInput={autosave}
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