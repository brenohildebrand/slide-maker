import React from 'react';
import { chunk, times } from 'lodash';
import { useSelector } from 'react-redux';
import styles from './SlidesGrid.module.scss';

const selectSlidesContent = state => state.slides.content;

export default function SlidesGrid () {

    const slidesContent = useSelector(selectSlidesContent);

    /* group the slides in chunks of 5 */
    const chunks = chunk(slidesContent, 5);

    return (
        <section className={styles.SlidesGrid}>    
            {chunks.map((groupOfSlides, index) => {

                /* for each group, return a row of 5 slides */

                return (
                    <div key={`${index}-group-of-slides`}>
                        {groupOfSlides.map((slide, index) => {
                            
                            const isTheLastSlide = (index === groupOfSlides.length - 1);
                            const isACompleteChunk = index + 1 === 5;

                            const { html, css, javascript } = slide;

                            const srcDoc = `
                                <html>
                                    <body>${html}</body>
                                    <style>${css}</style>
                                    <script>${javascript}</script>    
                                </html>
                            `

                            return (
                                <>
                                    <div key={`${index}-slide`}>
                                        <iframe
                                            srcDoc={srcDoc} 
                                            title="slide"
                                        />
                                        <div 
                                            id="iframe-selection" 
                                            className={styles.iframeSelection}>                            
                                        </div>
                                    </div>
                                    {
                                        /* complete the row of 5, if it's not completed and if it's the last slide */
                                        isTheLastSlide && !isACompleteChunk && times(5 - (index + 1), idx => <div key={`${idx}-div-to-complete`}></div>)                                     
                                    }
                                </>
                            );

                        })}
                    </div>
                );

            })}
        </section>
    );

}