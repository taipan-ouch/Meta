import * as React from 'react';
import {JSONSchema7} from 'json-schema';
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

import ContactSchema from 'meta/schema/Contact.json';
import MetaForm, {MetaFormSelectors} from 'components/MetaForm/MetaForm';


let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('firstName is present', () => {
  act(() => {render(<MetaForm json={ContactSchema as JSONSchema7} />, container)})
  const value = document.getElementsByClassName(MetaFormSelectors.container)[0];
  expect(value.textContent).toBe('firstName');
})