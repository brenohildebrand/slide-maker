import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleShortcuts from './handleShortcuts';

export default function ShortcutsWrapper ({ children }) {

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', (event) => handleShortcuts(event, dispatch));
        return () => window.removeEventListener('keydown', (event) => handleShortcuts(event, dispatch));
    })

    return <>{children}</>;

}