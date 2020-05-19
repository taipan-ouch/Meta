import * as React from 'react';
import { render } from 'react-dom';

import Sidebar, { SidebarSection } from 'components/Sidebar/Sidebar';
import Canvas, { CanvasContentKey } from 'components/Canvas/Canvas';
import {ReactElement, useState} from 'react';

const sections: SidebarSection[] = [
  {
    name: 'meta',
    label: 'meta',
    items: [
      {
        label: 'Create Schema',
        name: 'createSchema',
        dataFeather: 'file-edit'
      },
    ],
  },
];

function RenderSidebarAndContent(): ReactElement {
  const [canvasContentKey] = useState(CanvasContentKey.SCHEMA)
  return (
    <div id="app-container" className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <aside id="sidebar">
            <ul>
              <Sidebar sections={sections} onSelectItem={(name) => alert(name)}/>
            </ul>
          </aside>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Canvas canvasContentKey={canvasContentKey}/>
        </main>
      </div>
    </div>
  );
}

function RenderHeader(): ReactElement {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <span className="navbar-brand col-sm-3 col-md-2 mr-0">MetaMob</span>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <button type="button" className="btn btn-link">Sign out</button>
        </li>
      </ul>
    </nav>
  );
}

function RenderMainApp(): ReactElement {
  return (
    <>
      <RenderHeader />
      <RenderSidebarAndContent />
    </>
  )
}

const rootElement = document.getElementById('main-app');
render(<RenderMainApp />, rootElement);
