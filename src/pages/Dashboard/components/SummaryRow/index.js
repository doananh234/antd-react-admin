import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Row, Col } from 'antd';
import SummaryCard from 'components/common/SummaryCard';
import { FileOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons';

const SummaryRow = ({ theme, summaries = {} }) => {
  const SUMMARIES = [
    {
      icon: UserOutlined,
      title: 'home.summary.user',
      value: summaries.user || 0,
      color: theme.palette.color[0],
      percentage: 8,
      type: 'up',
    },
    {
      icon: RobotOutlined,
      title: 'home.summary.artists',
      value: summaries.business || 0,
      color: theme.palette.color[1],
      percentage: 8,
      type: 'down',
    },
    {
      icon: FileOutlined,
      title: 'home.summary.artworks',
      value: summaries.order || 0,
      color: theme.palette.color[2],
      percentage: 18,
      type: 'up',
    },
    {
      icon: FileOutlined,
      title: 'home.summary.galleries',
      value: summaries.order || 0,
      color: theme.palette.color[2],
      percentage: 18,
      type: 'up',
    },
  ];
  return (
    <Row gutter={24} type="flex">
      {SUMMARIES.map((data) => (
        <Col
          className="col-block"
          key={data.title}
          lg={24 / SUMMARIES.length}
          md={12}
          xs={24}
        >
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
