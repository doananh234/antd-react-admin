import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const UsersForm = props => (
  <div {...props}>
    <RestInputItem source="fullName" header="fullName" />
  </div>
);

UsersForm.propTypes = {};

export default UsersForm;
