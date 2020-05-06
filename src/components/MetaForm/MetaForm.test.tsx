import * as React from 'react';
import { set } from 'lodash';

import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

import MetaForm, { MetaFormSelectors } from 'components/MetaForm/MetaForm';
import { SingleUnrestrictedSelectors } from 'components/SingleUnrestricted/SingleUnrestricted';

const TEST_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'KitchenSink',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    surName: {
      type: 'string',
    },
  },
};

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('firstName is present', () => {
  act(() => {
    render(<MetaForm json={TEST_SCHEMA} saveService={jest.fn()} />, container);
  });
  const propertyName = Object.keys(TEST_SCHEMA.properties)[0];
  const selector = new SingleUnrestrictedSelectors(propertyName);
  const value = document.getElementsByClassName(selector.container)[0];
  expect(value.textContent).toBe(propertyName);
});

test('surName is present', () => {
  act(() => {
    render(<MetaForm json={TEST_SCHEMA} saveService={jest.fn()} />, container);
  });
  const propertyName = Object.keys(TEST_SCHEMA.properties)[1];
  const selector = new SingleUnrestrictedSelectors(propertyName);
  const value = document.getElementsByClassName(selector.container)[0];
  expect(value.textContent).toBe(propertyName);
});

test('create instance', () => {
  const selectors = new MetaFormSelectors();
  const saveMock = jest.fn();
  act(() => {
    render(<MetaForm json={TEST_SCHEMA} saveService={saveMock} />, container);
  });
  const button = document.querySelector(`.${selectors.container} .${selectors.submitButton}`);
  if (button) {
    const prop0Selector = new SingleUnrestrictedSelectors(Object.keys(TEST_SCHEMA.properties)[0]);
    const prop1Selector = new SingleUnrestrictedSelectors(Object.keys(TEST_SCHEMA.properties)[1]);
    act(() => {
      const input0: HTMLInputElement | null = document.querySelector(`.${prop0Selector.input}`);
      if (input0) {
        input0.value = 'FOO';
      }
      const input1: HTMLInputElement | null = document.querySelector(`.${prop1Selector.input}`);
      if (input1) {
        input1.value = 'BAR';
      }
      Simulate.submit(button);
    });
  }
  const expectedResult = {};
  set(expectedResult, Object.keys(TEST_SCHEMA.properties)[0], 'FOO');
  set(expectedResult, Object.keys(TEST_SCHEMA.properties)[1], 'BAR');
  expect(saveMock).toHaveBeenCalledWith(expectedResult);
});
