import React, { Component } from 'react';
import i18next from 'i18next';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import HomeWrapper from './style';
import PageTitle from '../../components/common/PageTitle';

import SummaryRow from './components/SummaryRow';
import ActivitiesLog from './components/ActivitiesLog';
import { ACTIVITIES_LOG } from '../../configs/localData';

class Home extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <HomeWrapper>
        <PageTitle>{i18next.t('home.title.overview')}</PageTitle>
        <SummaryRow />
        <Row gutter={32}>
          <Col md={18}>
            <PageTitle>{i18next.t('home.title.newestClients')}</PageTitle>
            <PageTitle>{i18next.t('home.title.newestLeads')}</PageTitle>
          </Col>
          <Col md={6}>
            <PageTitle>{i18next.t('home.title.activitiesLog')}</PageTitle>
            <ActivitiesLog dataSource={ACTIVITIES_LOG} />
          </Col>
        </Row>
      </HomeWrapper>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
