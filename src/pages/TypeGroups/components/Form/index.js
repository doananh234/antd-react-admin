import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const TypeGroupsForm = props => (
  <div {...props}>
    <RestInputItem source="displayName.vi" title="displayName.vi" />
    <RestInputItem source="slug" title="slug" />
  </div>
);

TypeGroupsForm.propTypes = {};

export default TypeGroupsForm;
