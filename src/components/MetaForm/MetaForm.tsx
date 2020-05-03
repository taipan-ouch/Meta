import * as React from 'react';
import {JSONSchema7} from 'json-schema';

interface Props {
  json?: JSONSchema7;
}

export enum MetaFormSelectors {
  container = 'meta-form'
}

export default function MetaForm(props: Props): React.ReactElement<Element> {
  const propNames = Object.keys(props.json?.properties || {});
  return (
    <div className="meta-form input-groups">
      <div className="form-group">
        <label htmlFor="firstNameLabel">{propNames[0]}</label>
        <input type="text" className="firstNameInput" id="firstNameLabel" />
      </div>
    </div>
  )
}