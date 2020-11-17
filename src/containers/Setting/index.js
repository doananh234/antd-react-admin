import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Button } from 'antd';
import i18next from 'i18next';
import { convertObjToSearchStr } from 'utils/tools';
import PageTitle from 'components/common/PageTitle';
import { useHistory, useParams } from 'react-router';
// import PagesList from 'containers/Pages/List';
import SettingStyle from './styles';

const { TabPane } = Tabs;

const TABS = [
  // {
  //   key: 'artTypes',
  //   text: 'tabs.artTypes',
  //   url: '/artTypes',
  //   component: ArtTypesList,
  // },
];

const Settings = ({ ...props }) => {
  const history = useHistory();
  const params = useParams();
  const onChange = (key) => {
    history.push(`/settings/${key}`);
  };
  const gotoCreatePage = () => {
    const { redirects, rootPath, initCreateData } = props;
    const route = `${rootPath}/${params.model}/create`;
    if (redirects.create === 'modal') {
      history.push(
        `#${params.model}/create?${convertObjToSearchStr(initCreateData)}`,
      );
    } else {
      history.push(route);
    }
  };
  return (
    <SettingStyle>
      <div className="page-header">
        <PageTitle>{i18next.t('settings.header')}</PageTitle>
        <Button type="primary" onClick={gotoCreatePage}>
          {i18next.t('button.create')}
        </Button>
      </div>
      <Tabs
        type="card"
        defaultActiveKey={params.model || 'rooms'}
        onChange={onChange}
      >
        {TABS.map((tab) => (
          <TabPane tab={i18next.t(tab.text)} key={tab.key}>
            <tab.component
              hasCreate={false}
              hasExport={false}
              hasSearch={false}
              rootPath="/settings"
              noCardWrapper
              {...props}
            />
          </TabPane>
        ))}
      </Tabs>
    </SettingStyle>
  );
};

Settings.propTypes = {
  match: PropTypes.object,
  redirects: PropTypes.object,
  rootPath: PropTypes.string,
  initCreateData: PropTypes.object,
};

Settings.defaultProps = {
  rootPath: '/settings',
  redirects: {
    edit: 'modal',
    create: 'modal',
  },
  initCreateData: {},
};

export default Settings;
