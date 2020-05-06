import * as React from 'react';

export class SingleUnrestrictedSelectors {
  constructor(private propertyName: string) {}
  public container = `${this.propertyName}-form-group`;
  public labelRef = `${this.propertyName}-label-ref`;
  public input = `${this.propertyName}-input`;
}

interface Props {
  name: string;
  value?: string | number;
  minLength?: number;
  maxLength?: number;
}

export default function SingleUnrestricted(props: Props): React.ReactElement {
  const selectors = new SingleUnrestrictedSelectors(props.name);
  return (
    <div className={`${selectors.container} form-group`}>
      <label htmlFor={selectors.labelRef}>{props.name}</label>
      <input
        type="text"
        name={props.name}
        className={`${selectors.input} form-control`}
        id={selectors.labelRef}
        value={props.value || undefined}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
    </div>
  );
}
