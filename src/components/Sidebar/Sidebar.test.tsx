import * as React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

import Sidebar, { SidebarSection, SidebarWidget } from 'components/Sidebar/Sidebar';

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('should render just i node root level', () => {
  const onSelect = jest.fn();
  const TEST_VALUE = 'foo';
  const sections: SidebarSection[] = [
    {
      items: [
        {
          label: TEST_VALUE,
          name: TEST_VALUE,
          dataFeather: TEST_VALUE
        },
      ],
    },
  ];
  act(() => {
    render(<Sidebar sections={sections} onSelectItem={onSelect}/>, container);
  });
  act(() => {
    SidebarWidget.clickItem(TEST_VALUE);
  });
  expect(SidebarWidget.hasHeading()).toBe(false);
  expect(onSelect).toHaveBeenCalledWith(TEST_VALUE);
});

test('should render just 1 node with section', () => {
  const onSelect = jest.fn();
  const TEST_ITEM_VALUE = 'foo';
  const TEST_SECTION_VALUE = 'bar';
  const sections: SidebarSection[] = [
    {
      name: TEST_SECTION_VALUE,
      label: TEST_SECTION_VALUE,
      items: [
        {
          label: TEST_ITEM_VALUE,
          name: TEST_ITEM_VALUE,
          dataFeather: TEST_ITEM_VALUE,
        },
      ],
    },
  ];
  act(() => {
    render(<Sidebar sections={sections} onSelectItem={jest.fn} />, container);
  });
  expect(SidebarWidget.getSectionLabel(TEST_SECTION_VALUE)).toBe(TEST_SECTION_VALUE);
});
