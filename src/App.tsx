import * as React from 'react';
import './styles.css';
import MetaForm from './MetaForm/MetaForm';
import {JSONSchema7, validate} from 'json-schema';
import * as jsc from 'json-schema';
import ContactSchema from './meta/schema/Contact.json';

export default function App() {

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MetaForm json={ContactSchema as JSONSchema7}/>
    </div>
  );
}
