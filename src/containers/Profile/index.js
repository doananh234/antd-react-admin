import React from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import i18n from 'i18next';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import ProfileInfo from './components/ProfileInfo';
import Summary from './components/SummarySection';
import ProfileStyles from './styles';

const Profile = () => {
  const BREADCRUMB = [
    {
      title: i18n.t('profile.header'),
      path: '/profile',
    },
  ];
  const summaries = useSelector((state) => state.config.summaries);
  return (
    <ProfileStyles>
      <PageTitle>
        <CustomBreadcrumb data={BREADCRUMB} />
      </PageTitle>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8}>
          <Summary summaries={summaries} />
        </Col>
        <Col md={16} sm={24}>
          <ProfileInfo />
        </Col>
      </Row>
    </ProfileStyles>
  );
};

Profile.propTypes = {};

export default Profile;
