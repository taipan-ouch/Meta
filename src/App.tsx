import * as React from 'react';
import 'styles.css';

import MetaForm from 'components/MetaForm/MetaForm';
import ContactSchema from 'meta/schema/TwoProperties.json'


export default function App(): React.ReactElement<Element> {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MetaForm json={ContactSchema} saveService={(obj): void => {
        console.log(obj);
      }}></MetaForm>
    </div>
  );
}
