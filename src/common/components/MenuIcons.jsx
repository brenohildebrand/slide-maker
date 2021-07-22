import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MenuIcons.module.scss';

import file_upload_svg from '../assets/icons/file_upload.svg';
import file_download_svg from '../assets/icons/file_download.svg';

import menu_svg from '../assets/icons/menu.svg';
import { toggleCurrentPage } from '../../features/ui/uiSlice';

const selectSlidesLength = state => state.slides.length;
const selectCurrentIndex = state => state.slides.currentIndex;

export default function MenuIcons () {

    const dispatch = useDispatch();
    const slidesLength = useSelector(selectSlidesLength);
    const currentIndex = useSelector(selectCurrentIndex);

    const handleFileUploadOnClick = (event) => {
        event.preventDefault();
        console.log('choose file to upload');
    }

    const handleFileDownloadOnClick = (event) => {
        event.preventDefault();
        console.log('downloading...');
    }

    const handleMenuOnClick = (event) => {
        event.preventDefault();
        dispatch(toggleCurrentPage());
    }

    return (
        <section className={styles.MenuIcons}>
            <div>
                <div onClick={handleFileUploadOnClick}>
                    <img src={file_upload_svg} alt="upload file" />
                </div>
                <div onClick={handleFileDownloadOnClick}>
                    <img src={file_download_svg} alt="download file" />
                </div>
            </div>
            <div>
                <p>{`${currentIndex + 1}/${slidesLength}`}</p>
            </div>
            <div>
                <div onClick={handleMenuOnClick}>
                    <img src={menu_svg} alt="hide menu" />
                </div>
            </div>
        </section>
    )

}