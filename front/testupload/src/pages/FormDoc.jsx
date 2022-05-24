import React from 'react';
import MultipleSending from '../components/MultipleSending';
import SingleShipment from '../components/SingleShipment';
import TestPages from '../components/TestPages';

const FormDoc = () => {
  return (
    <div>
      <TestPages/>
      <hr/>
      <SingleShipment />
      <hr/>
      <MultipleSending />
    </div>
  );
};

export default FormDoc;