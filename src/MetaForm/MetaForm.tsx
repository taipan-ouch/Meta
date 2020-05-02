import * as React from "react";
import {JSONSchema7} from "json-schema";

interface Props {
  json?: JSONSchema7
}

export default function MetaForm(props: Props) {
  const propNames = Object.keys(props.json?.properties || {});
  return (
    <div className="MetaForm input-groups">
      <div className="form-group">
        <label htmlFor="firstName">{propNames[0]}</label>
        <input type="text" className="form-control" id="firstName" />
      </div>
    </div>
  )
}