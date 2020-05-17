import * as React from 'react';
import { ReactElement } from 'react';
import { Simulate } from 'react-dom/test-utils';

export interface SidebarItem {
  label: string;
  name: string;
  dataFeather: string;
  onSelect: (name: string) => void;
}

export interface SidebarSection {
  label?: string;
  name?: string;
  dataFeather?: string;
  items: SidebarItem[];
}

interface Props {
  sections: SidebarSection[];
}

const DEFAULT_NODE_NAME = 'root';

function RenderSidebarSectionItem(props: { item: SidebarItem }): ReactElement {
  return (
    <li className="side-nav-menu-item">
      <button className={`${props.item.name} btn btn-link`} onClick={() => props.item.onSelect(props.item.name)}>
        <span data-feather={props.item.dataFeather}></span>
        {props.item.label}
      </button>
    </li>
  );
}

function RenderSideBarSectionItems(props: { section: SidebarSection }): ReactElement {
  return (
    <>
      {props.section.items.map((item) => (
        <RenderSidebarSectionItem key={item.name} item={item} />
      ))}
    </>
  );
}

function RenderSidebarSections(props: { sections: SidebarSection[] }): ReactElement {
  return (
    <>
      {props.sections.map((section) => {
        if (!section.name) {
          return (
            <ul key={`${section.name}_ul`} className="nav flex-column">
              <RenderSideBarSectionItems key={section.name || DEFAULT_NODE_NAME} section={section} />
            </ul>
          );
        } else {
          return (
            <React.Fragment key={`${section.name}_frag`}>
              <h6
                className={`${section.name} sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`}>
                <span className={`${section.name} label`}>{section.label}</span>
                <span data-feather={section.dataFeather}></span>
              </h6>
              <RenderSideBarSectionItems key={section.name || DEFAULT_NODE_NAME} section={section} />
            </React.Fragment>
          );
        }
      })}
    </>
  );
}

const CONTAINER_ID = 'sidebar-sticky';

export default function Sidebar(props: Props) {
  return (
    <div className={CONTAINER_ID}>
      <RenderSidebarSections key="jj" sections={props.sections} />
    </div>
  );
}

export const SidebarWidget = {
  clickItem(name: string) {
    const button = document.querySelector(`.${CONTAINER_ID} button.${name}`);
    if (button) {
      Simulate.click(button);
    }
  },

  getSectionLabel(label: string): string {
    const element = document.querySelector(`.${CONTAINER_ID} .${label} .label`);
    return element ? element.innerHTML : '';
  },

  hasHeading() {
    return document.querySelector(`.${CONTAINER_ID} .sidebar-heading`) != null;
  },
};
