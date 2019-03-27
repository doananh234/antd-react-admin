import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const TitlesForm = props => (
  <div {...props}>
    <RestInputItem source="name" header="titles.name" />
    <RestInputItem source="description" header="titles.description" />
  </div>
);

TitlesForm.propTypes = {};

export default TitlesForm;
