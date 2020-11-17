import React from 'react';
import { Card, Row, Col } from 'antd';
import RestFieldItemWithLabel from 'components/RestField/RestFieldItemWithLable';
import { EditOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';

const CostCard = () => {
  return (
    <Card title="Chi phí" extra=<EditOutlined />>
      <Row>
        <Col span={8}>
          <RestFieldItemWithLabel header="Tiền ăn" source="" />
          <RestFieldItemWithLabel header="Tiền học phí" source="" />
          <RestFieldItemWithLabel header="Tiền phải nộp" source="" />
        </Col>
        <Col span={8}>
          <RestFieldItemWithLabel header="Tiền ăn thực tế" source="" />
          <RestFieldItemWithLabel header="Tiền phụ đạo" source="" />
        </Col>
        <Col span={8}>
          <RestFieldItemWithLabel header="Tiền tháng trước" source="" />
          <RestFieldItemWithLabel header="Tiền giảm đặc biệt" source="" />
        </Col>
      </Row>
    </Card>
  );
};

CostCard.propTypes = {};

export default CostCard;
