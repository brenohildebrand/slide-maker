import React from 'react';
import { chunk, times } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SlidesGrid.module.scss';
import { setIndexTo } from '../../features/slides/slidesSlice';

const selectSlides = state => state.slides;

export default function SlidesGrid () {

    const dispatch = useDispatch();

    const slides = useSelector(selectSlides);
    const { content, currentIndex } = slides;

    /* group the slides in chunks of 5 */
    const chunks = chunk(content, 5);

    const handleSlideOnClick = (event, index) => {
        event.preventDefault();
        dispatch(setIndexTo(index));

        console.log('I was selected!', index);
    }

    return (
        <section className={styles.SlidesGrid}>    
            {chunks.map((groupOfSlides, groupIndex) => {

                /* for each group, return a row of 5 slides */

                return (
                    <div key={`${groupIndex}-group-of-slides`}>
                        {groupOfSlides.map((slide, index) => {
                            
                            const isTheLastSlide = (index === groupOfSlides.length - 1);
                            const isACompleteChunk = index + 1 === 5;

                            const myIndex = groupIndex * 5 + index;

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
                                            className={`${(myIndex === currentIndex) ? styles.selected : null}`}
                                            srcDoc={srcDoc} 
                                            title="slide"
                                        />
                                        <div 
                                            id="iframe-selection" 
                                            onClick={(event) => handleSlideOnClick(event, index)}
                                            className={styles.iframeSelection}
                                        >                          
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