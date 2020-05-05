import * as React from 'react';
import {set} from 'lodash';

import {JSONSchema7, validate} from 'json-schema';
import {FormEvent, ReactElement,} from "react";
import {Json, JsonMap} from 'TsTypes';
import SingleUnrestricted from "components/SingleUnrestricted/SingleUnrestricted";

type SaveService = (json: Json) => void;

interface Props {
  json?: Json;
  saveService: SaveService;
}

function RenderProperties({json}: {json: JSONSchema7}): ReactElement {
  const properties = [];
  for (const propertyName in json?.properties) {
    const propertySchema = json?.properties[propertyName] as JSONSchema7;
    if (propertySchema.type === 'string') {
      properties.push(<SingleUnrestricted key={propertyName} name={propertyName}/>)
    }
  }

  return (<>{properties}</>);
}

function saveHandler(formData: FormData, schema: JSONSchema7, saveService: SaveService ): void {
  const obj: JsonMap = {}
  formData.forEach((value: FormDataEntryValue, key) => {
    set(obj, key, value);
  })
  try {
    validate(obj, schema);
    saveService(obj);
  } catch (error) {
    //todo handle
  }
}

export class MetaFormSelectors {
  public container = 'meta-form'
  public submitButton = 'submit-button'
}

export default function MetaForm({json, saveService}: Props): ReactElement {
  const selectors = new MetaFormSelectors();
  return (
    <div className={`${selectors.container} meta-form input-groups`}>
      <form onSubmit={(event: FormEvent<HTMLFormElement>): void => {
        saveHandler(new FormData(event.currentTarget), json as JSONSchema7, saveService);
      }}>
        <RenderProperties json={json as JSONSchema7} />
        <button className={`${selectors.submitButton} btn btn-primary`} type="submit">Save</button>
      </form>
    </div>
  )
}

/**
 <label htmlFor="firstNameLabel">{propNames[0]}</label>
 <input type="text" className="firstNameInput" id="firstNameLabel" />**/