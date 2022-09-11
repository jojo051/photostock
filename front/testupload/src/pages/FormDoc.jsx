import React from 'react';
import DeleteImages from '../components/DeleteImages';
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
      <DeleteImages />
    </div>
  );
};

export default FormDoc;