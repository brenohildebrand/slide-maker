import React from 'react';
import styles from './MainIcons.module.scss'

import play_svg from '../assets/icons/play.svg';
import add_svg from '../assets/icons/add.svg';
import remove_svg from '../assets/icons/remove.svg';
import code_svg from '../assets/icons/code.svg';

import menu_svg from '../assets/icons/menu.svg';
import { useDispatch } from 'react-redux';
import { add, remove, setIndexToZero } from '../../features/slides/slidesSlice';
import { hideIcons, setFullscreen, toggleCodeEditor, toggleCurrentPage } from '../../features/ui/uiSlice';

export default function MainIcons () {

    const dispatch = useDispatch();

    const handlePlayOnClick = (event) => {
        event.preventDefault();
        dispatch(setIndexToZero());
        dispatch(setFullscreen());
        dispatch(hideIcons());
    }

    const handleAddOnClick = (event) => {
        event.preventDefault();
        dispatch(add());
    }

    const handleRemoveOnClick = (event) => {
        event.preventDefault();
        dispatch(remove());
    }

    const handleCodeOnClick = (event) => {
        event.preventDefault();
        dispatch(toggleCodeEditor());
    }

    const handleMenuOnClick = (event) => {
        event.preventDefault();
        dispatch(toggleCurrentPage())
    }

    return (
        <section className={styles.MainIcons}>
            <div>
                <div onClick={handlePlayOnClick}>
                    <img src={play_svg} alt="present slides" />
                </div>
                <div onClick={handleAddOnClick}>
                    <img src={add_svg} alt="add new slide" />
                </div>
                <div onClick={handleRemoveOnClick}>
                    <img src={remove_svg} alt="delete slide" />
                </div>
                <div onClick={handleCodeOnClick}>
                    <img src={code_svg} alt="show slide code" />
                </div>
            </div>
            <div>
                <div onClick={handleMenuOnClick}>
                    <img src={menu_svg} alt="show menu" />
                </div>
            </div>
        </section>
    );

}