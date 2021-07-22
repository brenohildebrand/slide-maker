import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/Store';
import ShortcutsWrapper from './features/shortcuts/ShortcutsWrapper';
import FullscreenWrapper from './features/fullscreen/FullscreenWrapper';
import App from './app/App';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <ShortcutsWrapper>
            <FullscreenWrapper>
                <App/>
            </FullscreenWrapper>
        </ShortcutsWrapper>
    </Provider>, 
    document.getElementById('root')
);