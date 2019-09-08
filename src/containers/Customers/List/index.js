import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Switch } from 'antd';
import i18next from 'i18next';
import { withTheme } from 'styled-components';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import UserInfo from '../../../components/RestField/UserInfo';
import { formatDateTime } from '../../../utils/textUtils';
import SummaryCard from '../../../components/common/SummaryCard';
import { GENDERS } from '../../../configs/localData';

const CustomersList = props => {
  const { theme } = props;

  const SUMMARIES = [
    {
      icon: 'ic-list-user',
      header: 'customers.summaries.totalUsers',
      value: 0,
      color: theme.color.violet,
    },
    {
      icon: 'ic-list-user',
      header: 'customers.summaries.totalUserOfDay',
      value: 0,
      color: theme.color.blueShade,
    },
    {
      icon: 'ic-list-user',
      header: 'customers.summaries.totalUserMonth',
      value: 0,
      color: theme.color.lightGreen,
    },
    {
      icon: 'ic-list-user',
      header: 'customers.summaries.totalUserYear',
      value: 0,
      color: theme.color.green,
    },
  ];
  return (
    <div>
      <Row gutter={24} type="flex">
        {SUMMARIES.map((data, index) => (
          <Col key={String(index)} lg={6} md={12} xs={24}>
            <SummaryCard {...data} />
          </Col>
        ))}
      </Row>
      <List {...props} redirects={{ edit: 'screen', create: 'modal' }} resource="customers">
        <UserInfo hasSearch prefixLink="customers" source="fullName" header="customers.name" />
        <RestFieldItem hasSearch source="email" header="customers.email" />
        <RestFieldItem
          source="gender"
          header="customers.gender"
          filters={GENDERS.map(e => ({ ...e, text: i18next.t(e.text) }))}
        />
        <RestFieldItem hasSearch source="phoneNumber" header="customers.phoneNumber" />
        <RestFieldItem source="job" header="customers.job" />
        <RestFieldItem source="address" header="customers.address" />
        <RestFieldItem
          format={data => formatDateTime(data)}
          source="dateOfBirth"
          header="customers.dateOfBirth"
        />
        <RestFieldItem header="customers.isActive" component={<Switch />} source="isActive" />
        <ActionGroup>
          <EditButton />
        </ActionGroup>
      </List>
    </div>
  );
};

CustomersList.propTypes = {
  theme: PropTypes.object,
  getCustomersReports: PropTypes.func,
  customerReports: PropTypes.object,
};

export default withTheme(CustomersList);
