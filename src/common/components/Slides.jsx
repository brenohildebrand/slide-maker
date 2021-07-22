import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Slides.module.scss';

const selectSlides = state => state.slides;
const selectCurrentIndex = state => state.slides.currentIndex;

export default function Slides () {

    const slides = useSelector(selectSlides);
    const currentIndex = useSelector(selectCurrentIndex);

    const { html, css, javascript } = slides.content[currentIndex];

    const srcDoc = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>    
    </html>
`

    return (
        <>
            <iframe
                className={styles.Slides}
                srcDoc={srcDoc} 
                title="slide"
                sandbox="allow-scripts"
                allowFullScreen
            />
            <div id="iframe-selection" className={styles.iframeSelection}></div>
        </>
    );

}