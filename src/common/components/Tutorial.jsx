import React from 'react';
import styles from './Tutorial.module.scss';

import key_t from '../assets/icons/key_t.svg';
import key_p from '../assets/icons/key_p.svg';
import key_f from '../assets/icons/key_f.svg';

import key_c from '../assets/icons/key_c.svg';
import key_arrow_left from '../assets/icons/key_arrow_left.svg';
import key_arrow_right from '../assets/icons/key_arrow_right.svg';
import key_esc from '../assets/icons/key_esc.svg';

export default function Tutorial () {

    return ( 

        <section className={styles.Tutorial}>
            <div>
                <p>slide-maker</p>
            </div>
            <div>
                <aside>
                    <div>
                        <p>Use </p>
                        <span><img src={key_t} alt="T"/></span>
                        <p> to see this tutorial</p>
                    </div>
                    <div>
                        <p>Use </p>
                        <span><img src={key_p} alt="P"/></span>
                        <p> to present the slides</p>
                    </div>
                    <div>
                        <p>Use </p>
                        <span><img src={key_f} alt="F"/></span>
                        <p> to toggle fullscreen</p>
                    </div>
                </aside>
                <aside>
                    <div>
                        <p>Use </p>
                        <span><img src={key_c} alt="C"/></span>
                        <p> to see the code</p>
                    </div>
                    <div>
                        <p>Use </p>
                        <span><img src={key_arrow_left} alt="Arrow Left"/></span>
                        <p> and </p>
                        <span><img src={key_arrow_right} alt="Arrow Right" /></span>
                        <p> to switch between slides</p>
                    </div>
                    <div>
                        <p>Use </p>
                        <span><img src={key_esc} alt="ESC"/></span>
                        <p> to go back</p>
                    </div>
                </aside>
            </div>
            <div>
                <p>skip</p>
            </div>
        </section>

    );

}