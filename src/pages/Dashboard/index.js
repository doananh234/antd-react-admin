import React, { useEffect } from 'react';
import i18next from 'i18next';
import { Row, Col } from 'antd';
// import { useSelector, useDispatch } from 'react-redux';
// import { getSummaries } from 'redux/config/actions';
import PageTitle from 'components/common/PageTitle';
import HomeWrapper from './styles';
import SummaryRow from './components/SummaryRow';
import ChartRevenue from './components/ChartRevenue';
import WorldMap from './components/WorldMap';
import DetailedSummaryRow from './components/DetailedSummaryRow';

const Home = () => {
  // const summaries = useSelector((state) => state.config.summaries);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getSummaries());
    // eslint-disable-next-line
  }, []);
  return (
    <HomeWrapper>
      <PageTitle>{i18next.t('home.title.overview')}</PageTitle>
      <SummaryRow summaries={{}} />
      <Row gutter={24} className="row-chart">
        <Col lg={16} md={24} xs={24} className="col-block">
          <ChartRevenue dataKey="name" />
        </Col>
        <Col lg={8} md={24} xs={24} className="col-block">
          <WorldMap />
        </Col>
      </Row>
      <DetailedSummaryRow />
    </HomeWrapper>
  );
};

Home.propTypes = {};

export default Home;
