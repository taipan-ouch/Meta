import * as React from 'react';
import { render } from 'react-dom';

import Sidebar, { SidebarSection } from 'components/Sidebar/Sidebar';
import Canvas from 'components/Canvas/Canvas';
import { ReactElement } from 'react';

const sections: SidebarSection[] = [
  {
    name: 'meta',
    label: 'meta',
    items: [
      {
        label: 'Create Schema',
        name: 'createSchema',
        onSelect: (name) => {
          alert(name);
        },
        dataFeather: 'file-edit',
      },
    ],
  },
];

function RenderSidebarAndContent(): ReactElement {
  return (
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <aside id="sidebar">
          <ul>
            <Sidebar sections={sections} />
          </ul>
        </aside>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <Canvas />
      </main>
    </div>
  );
}

const rootElement = document.getElementById('app-container');
render(<RenderSidebarAndContent />, rootElement);
