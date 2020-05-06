import * as React from 'react';
import 'styles.css';

import MetaForm from 'components/MetaForm/MetaForm';

const TEST_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'KitchenSink',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    surName: {
      type: 'string',
    },
  },
};

export default function App(): React.ReactElement<Element> {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MetaForm
        json={TEST_SCHEMA}
        saveService={(obj): void => {
          console.log(obj);
        }}
      />
    </div>
  );
}
