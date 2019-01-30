import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const BloodDonationsList = props => (
  <List {...props} resource="rooms">
    <RestFieldItem title="test" source="name" />
    <RestFieldItem title="nice" source="name" />
  </List>
);
BloodDonationsList.propTypes = {};

export default BloodDonationsList;
