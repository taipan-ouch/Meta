import * as React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SingleUnrestricted, { SingleUnrestrictedSelectors } from 'components/SingleUnrestricted/SingleUnrestricted';

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('minLength is present', () => {
  const componentName = "Foo";
  const testLength = 5;
  act(() => {
    render(<SingleUnrestricted name={componentName} minLength={testLength}/>, container);
  });
  const selector = new SingleUnrestrictedSelectors(componentName);
  const inputElement: HTMLInputElement = document.getElementsByClassName(selector.input)[0] as HTMLInputElement;
  expect(inputElement.minLength).toBe(testLength);
});

test('maxLength is present', () => {
  const componentName = "Foo";
  const testLength = 5;
  act(() => {
    render(<SingleUnrestricted name={componentName} maxLength={testLength}/>, container);
  });
  const selector = new SingleUnrestrictedSelectors(componentName);
  const inputElement: HTMLInputElement = document.getElementsByClassName(selector.input)[0] as HTMLInputElement;
  expect(inputElement.maxLength).toBe(testLength);
});