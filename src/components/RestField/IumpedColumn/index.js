import React from 'react';
import { map } from 'lodash';

const IumpedColumn = ({ data }) =>
  map(data, item => (
    <div>
      {item.title}
      :
      <b>{item.value}</b>
    </div>
  ));

export default IumpedColumn;
