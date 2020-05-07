import * as React from 'react';
import { render } from 'react-dom';

import App from 'App';
import Sidebar from 'components/Sidebar/Sidebar'
import Canvas from 'components/Canvas/Canvas'

const sidebarContainer = document.getElementById('sidebar');
render(<Sidebar />, sidebarContainer);

const canvasContainer = document.getElementById('canvas');
render(<Canvas />, canvasContainer);

const rootElement = document.getElementById('root');
render(<App />, rootElement);