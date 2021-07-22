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
            <p>slide-maker</p>
            <div>
                <p>Use <span><img src={key_t} alt="T"/></span> to see this tutorial</p>
                <p>Use <span><img src={key_p} alt="P"/></span> to present the slides</p>
                <p>Use <span><img src={key_f} alt="F"/></span> to toggle fullscreen</p>
            </div>
            <div></div>
            <div>
                <p>Use <span><img src={key_c} alt="C"/></span> to see the code</p> 
                <p>Use <span><img src={key_arrow_left} alt="Arrow Left"/></span> and <span><img src={key_arrow_right} alt="Arrow Right" /></span> to switch between slides</p>
                <p>Use <span><img src={key_esc} alt="ESC"/></span> to go back</p>
            </div>
            <p>skip</p>
        </section>

    );

}