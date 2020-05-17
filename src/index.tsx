import * as React from 'react';
import { render } from 'react-dom';

import App from 'App';
import Sidebar, {SidebarSection} from 'components/Sidebar/Sidebar'
import Canvas from 'components/Canvas/Canvas'

const sections: SidebarSection[] = [
  {
    name: 'meta',
    label: 'meta',
    items: [
      {
        label: 'Create Schema',
        name: 'createSchema',
        onSelect: (name) => {
          alert(name)
        },
        dataFeather: 'file-edit',
      },
    ],
  },
];

const sidebarContainer = document.getElementById('sideNav');
render(<Sidebar sections={sections} />, sidebarContainer);

const canvasContainer = document.getElementById('canvas');
render(<Canvas />, canvasContainer);

const rootElement = document.getElementById('root');
render(<App />, rootElement);