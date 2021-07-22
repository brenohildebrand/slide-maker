import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleShortcuts from './handleShortcuts';

export default function ShortcutsWrapper ({ children }) {

    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('keydown', (event) => handleShortcuts(event, dispatch));
        return () => document.removeEventListener('keydown', (event) => handleShortcuts(event, dispatch));
    })

    return <>{children}</>;

}