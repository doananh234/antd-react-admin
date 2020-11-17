import React from 'react';
import { Row, Col } from 'antd';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import Text from 'components/common/Text';
import DetailedSummaryRevenue from './DetailedSummaryRevenue';
import DetailedSummaryCustomer from './DetailedSummaryCustomer';
import DetailedSummaryProduct from './DetailedSummaryProduct';
import DetailSummaryRowStyle, { DetailSummaryItemStyles } from './styles';

const SummaryItem = ({ title, children }) => {
  return (
    <DetailSummaryItemStyles>
      <div>
        <Text type="h5" className="title">
          {i18next.t(title)}
        </Text>
      </div>
      <div className="item-content">{children}</div>
    </DetailSummaryItemStyles>
  );
};

const DetailedSummaryRow = () => {
  const summaries = [
    {
      title: 'home.detailedSummary.monthRevenue',
      Component: DetailedSummaryRevenue,
    },
    {
      title: 'home.detailedSummary.customer',
      Component: DetailedSummaryCustomer,
    },
    {
      title: 'home.detailedSummary.product',
      Component: DetailedSummaryProduct,
    },
  ];
  return (
    <DetailSummaryRowStyle>
      <Row gutter={24} className="row-detail-summary">
        {summaries.map((item, i) => (
          <Col
            lg={8}
            md={12}
            sm={24}
            xs={24}
            key={String(i)}
            className="col-card"
          >
            <SummaryItem title={item.title}>
              <item.Component title={item.title} />
            </SummaryItem>
          </Col>
        ))}
      </Row>
    </DetailSummaryRowStyle>
  );
};

SummaryItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default DetailedSummaryRow;
