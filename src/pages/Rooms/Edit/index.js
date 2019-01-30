import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const BloodDonationsEdit = props => (
  <Edit {...props} resource="rooms">
    <Form />
  </Edit>
);
BloodDonationsEdit.propTypes = {};

export default BloodDonationsEdit;
