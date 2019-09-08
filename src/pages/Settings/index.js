import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { push } from 'connected-react-router';

const { TabPane } = Tabs;

const TABS = [
  // {
  //   key: 'transactionTypes',
  //   text: 'tabs.transactionTypes',
  //   url: '/transactionTypes',
  //   component: TransactionTypes,
  // },
];

const Settings = ({ match, pushRoute, ...props }) => {
  const onChange = key => {
    pushRoute(`/settings/${key}`);
  };
  return (
    <div>
      <Tabs defaultActiveKey={match.params.model || 'rooms'} onChange={onChange}>
        {TABS.map(tab => (
          <TabPane tab={i18next.t(tab.text)} key={tab.key}>
            <tab.component
              rootPath="/settings"
              noCardWrapper
              layoutButtonCreate="no-inline"
              {...props}
            />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

Settings.propTypes = {
  match: PropTypes.object,
  pushRoute: PropTypes.func,
};

export default connect(
  null,
  dispatch => ({
    pushRoute: data => dispatch(push(data)),
  })
)(Settings);
