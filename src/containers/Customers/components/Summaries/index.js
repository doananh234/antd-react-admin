import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Row, Col } from 'antd';
import SummaryCard from '../../../../components/common/SummaryCard';

const Summaries = ({ theme }) => {
  useEffect(() => {}, []);
  const SUMMARIES = [
    {
      icon: 'ic-payment',
      header: 'customers.summaries.revenue',
      value: 0,
      color: theme.color.violet,
    },
    {
      icon: 'ic-seat',
      header: 'customers.summaries.totalBookings',
      value: 0,
      color: theme.color.blueShade,
    },
  ];
  return (
    <Row gutter={24} type="flex">
      {SUMMARIES.map((data, index) => (
        <Col key={String(index)} lg={12} md={12} xs={24}>
          <SummaryCard {...data} />
        </Col>
      ))}
    </Row>
  );
};
Summaries.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(Summaries);
