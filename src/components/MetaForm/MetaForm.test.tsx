import * as React from 'react';
import {JSONSchema7} from 'json-schema';
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import MetaForm, {UnrestrictedStringSelectors} from 'components/MetaForm/MetaForm';
const TEST_SCHEMA = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "KitchenSink",
  type: "object",
  properties: {
    firstName: {
      "type": "string"
    },
    surName: {
      "type": "string"
    }
  }
}

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
  act(() => {render(<MetaForm json={TEST_SCHEMA as JSONSchema7} />, container)})
  const propertyName = Object.keys(TEST_SCHEMA.properties)[0]
  const selector = new UnrestrictedStringSelectors(propertyName)
  const value = document.getElementsByClassName(selector.container)[0];
  expect(value.textContent).toBe(propertyName);
})

test('surName is present', () => {
  act(() => {render(<MetaForm json={TEST_SCHEMA as JSONSchema7} />, container)})
  const propertyName = Object.keys(TEST_SCHEMA.properties)[1]
  const selector = new UnrestrictedStringSelectors(propertyName)
  const value = document.getElementsByClassName(selector.container)[0];
  expect(value.textContent).toBe(propertyName);
})