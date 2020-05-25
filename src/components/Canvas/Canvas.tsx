import * as React from 'react';
import Home from 'components/Home/Home';
import Schema from 'components/Schema/Schema';
import { ReactElement } from 'react';

export enum CanvasContentKey {
  HOME = 'HOME',
  SCHEMA = 'SCHEMA'
}

export default function Canvas(props: { canvasContentKey: string }): ReactElement {
  debugger;
  switch (props.canvasContentKey) {
    case CanvasContentKey.HOME:
      return <Home />;
    default:
      return <Schema />;
  }
}
