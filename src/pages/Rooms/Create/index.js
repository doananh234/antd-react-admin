import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const BloodDonationsCreate = props => (
  <Create {...props} resource="rooms">
    <Form />
  </Create>
);
BloodDonationsCreate.propTypes = {};

export default BloodDonationsCreate;
