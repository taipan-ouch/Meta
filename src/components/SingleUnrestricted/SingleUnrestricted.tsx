import * as React from "react";

export class SingleUnrestrictedSelectors {
  constructor(private propertyName: string) {}
  public container = `${this.propertyName}-form-group`
  public labelRef = `${this.propertyName}-label-ref`
  public input = `${this.propertyName}-input`
}

interface Props {
  name: string;
  value?: string | number;
}

export default function SingleUnrestricted({name, value}: Props): React.ReactElement {
  const selectors = new SingleUnrestrictedSelectors(name);
  return (
    <div className={`${selectors.container} form-group`} >
      <label htmlFor={selectors.labelRef}>{name}</label>
      <input type="text" name={name} className={`${selectors.input} form-control`} id={selectors.labelRef} value={value || undefined}/>
    </div>
  )
}