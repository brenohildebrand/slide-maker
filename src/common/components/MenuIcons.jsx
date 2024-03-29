import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MenuIcons.module.scss';

import file_upload_svg from '../assets/icons/file_upload.svg';
import file_download_svg from '../assets/icons/file_download.svg';

import menu_svg from '../assets/icons/menu.svg';
import { toggleCurrentPage } from '../../features/ui/uiSlice';
import { upload } from '../../features/slides/slidesSlice';
import localStorage from '../../features/storage/storageAPI';

const selectSlides = state => state.slides;

export default function MenuIcons () {

    const dispatch = useDispatch();

    const slides = useSelector(selectSlides);
    const { length: slidesLength, currentIndex } = slides;

    const uploadFile = useRef(null);
    const downloadFile = useRef(null);

    const file = new Blob([JSON.stringify(slides)], {type: "application/json"});
    const url = URL.createObjectURL(file);

    const handleFileInputOnChange = (event) => {
        event.preventDefault();

        /* When the user chooses a file */
        const file = uploadFile.current.files[0];
        const reader = new FileReader();

        /* Read the file content as a string */
        reader.readAsText(file);
        reader.onload = () => {
            /* Convert it to an object */
            const result = JSON.parse(reader.result);

            /* Update the state with the slides */
            dispatch(upload(result));
            
            /* Update the localStorage */
            localStorage.setItem('slides', result);
        }
    }

    const handleFileUploadOnClick = (event) => {
        event.preventDefault();
        uploadFile.current.click();
    }

    const handleFileDownloadOnClick = (event) => {
        event.preventDefault();
        downloadFile.current.click();
    }

    const handleMenuOnClick = (event) => {
        event.preventDefault();
        dispatch(toggleCurrentPage());
    }

    return (
        <section className={styles.MenuIcons}>
            <div>
                <input type='file' ref={uploadFile} onChange={handleFileInputOnChange} accept=".json" style={{display: 'none'}}/>
                <div onClick={handleFileUploadOnClick}>
                    <img src={file_upload_svg} alt="upload file" />
                </div>
                <a ref={downloadFile} href={url} download="slides.json" style={{display: 'none'}}></a>
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