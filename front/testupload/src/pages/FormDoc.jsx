import React from 'react';
import MultipleSending from '../components/MultipleSending';
import SingleShipment from '../components/SingleShipment';
import TestPages from '../components/TestPages';
import ViewImages from '../components/ViewImages';

const FormDoc = () => {
  return (
    <div>
      <TestPages/>
      <hr/>
      <SingleShipment />
      <hr/>
      <MultipleSending />
      <hr />
      <ViewImages />
    </div>
  );
};

export default FormDoc;