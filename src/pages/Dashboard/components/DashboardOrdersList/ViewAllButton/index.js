import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { StylesViewAll } from './style';

const ViewAllButton = (props) => {
  return (
    <StylesViewAll {...props}>
      <Link to="/orders" className="viewAll-display">
        <span>View All</span>
        <ArrowRightOutlined />
      </Link>
    </StylesViewAll>
  );
};

export default ViewAllButton;
