import * as React from 'react';
import {JSONSchema7} from 'json-schema';
import {ReactElement} from "react";

interface Props {
  json?: JSONSchema7;
}

export enum MetaFormSelectors {
  container = 'meta-form',
}

export class UnrestrictedStringSelectors {
  constructor(private propertyName: string) {}
  public container = `${this.propertyName}-form-group`
  public labelRef = `${this.propertyName}-label-ref`
  public input = `${this.propertyName}-input`
}

function RenderUnrestrictedString({name}: {name: string}): ReactElement {
  const selectors = new UnrestrictedStringSelectors(name);
  return (
    <div className={`${selectors.container} form-group`} >
      <label htmlFor={selectors.labelRef}>{name}</label>
      <input type="text" className={selectors.input} id={selectors.labelRef} />
    </div>
  )
}

function RenderProperties({json}: Props): ReactElement {
  const properties = [];
  for (const propertyName in json?.properties) {
    const propertySchema = json?.properties[propertyName] as JSONSchema7;
    if (propertySchema.type === 'string') {
      properties.push(<RenderUnrestrictedString key={propertyName} name={propertyName}/>)
    }
  }

  return (<>{properties}</>);
}

export default function MetaForm({json}: Props): ReactElement {
  return (
    <div className="meta-form input-groups">
      <div className="form-group">
        <RenderProperties json={json} />
      </div>
    </div>
  )
}

/**
 <label htmlFor="firstNameLabel">{propNames[0]}</label>
 <input type="text" className="firstNameInput" id="firstNameLabel" />**/