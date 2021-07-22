import React from 'react';
import { chunk, times } from 'lodash';
import { useSelector } from 'react-redux';
import styles from './SlidesGrid.module.scss';

const selectSlidesContent = state => state.slides.content;

export default function SlidesGrid () {

    const slidesContent = useSelector(selectSlidesContent);
    const chunks = chunk(slidesContent, 5);

    return (
        <section className={styles.SlidesGrid}>    
            {chunks.map((groupOfSlides, index) => {

                return (
                    <div key={index}>
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
                                    <div>
                                        <iframe
                                            key={index}
                                            srcDoc={srcDoc} 
                                            title="slide"
                                        />
                                    </div>
                                    {
                                        isTheLastSlide && !isACompleteChunk ? 
                                            times(5 - (index + 1), i => <div key={`${i}-div-to-complete`}></div>) 
                                            : null
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