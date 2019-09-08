import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Row, Col } from 'antd';
import SummaryCard from '../../../components/common/SummaryCard';

const SummaryRow = ({ theme, summaries = {} }) => {
  const SUMMARIES = [
    {
      icon: 'ic-people',
      title: 'home.summary.clients',
      value: summaries.clients || 0,
      color: theme.palette.color[1],
    },
    {
      icon: 'ic-company',
      title: 'home.summary.companies',
      value: summaries.companies || 0,
      color: theme.palette.color[4],
    },
    {
      icon: 'ic-campaign',
      title: 'home.summary.leads',
      value: summaries.leads || 0,
      color: theme.palette.color[15],
    },
    {
      icon: 'ic-employees',
      title: 'home.summary.campaigns',
      value: summaries.campaigns || 0,
      color: theme.palette.color[3],
    },
  ];
  return (
    <Row gutter={24} type="flex">
      {SUMMARIES.map(data => (
        <Col key={data.title} lg={6} md={12} xs={24}>
          <SummaryCard {...data} />
        </Col>
      ))}
    </Row>
  );
};
SummaryRow.propTypes = {
  summaries: PropTypes.object,
  theme: PropTypes.object,
};

export default withTheme(SummaryRow);
