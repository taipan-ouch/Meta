import * as React from 'react';
import './styles.css';
import MetaForm from './MetaForm/MetaForm';
import {useState} from "react";
import {Json} from "./TsTypes";
import $ from 'jquery';

export default function App() {
  const [json, setJson] = useState<Json | undefined>(undefined);

  $.getJSON('meta/schema/Contact.json').then((data) => setJson(data));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MetaForm json={json}/>
    </div>
  );
}
