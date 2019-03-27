import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import i18next from 'i18next';
import ProjectsTypesList from '../ProductTypes/List';
import StatusesList from '../Statuses/List';
import TitlesList from '../Titles/List';
import DepartmentsList from '../Departments/List';
import ActivityTypesList from '../ActivityTypes/List';

const { TabPane } = Tabs;

const TABS = [
  {
    key: 'productTypes',
    text: 'tabs.productTypes',
    url: '/productTypes',
    component: ProjectsTypesList,
  },
  {
    key: 'statuses',
    text: 'tabs.statuses',
    url: '/statuses',
    component: StatusesList,
  },
  {
    key: 'titles',
    text: 'tabs.titles',
    url: '/titles',
    component: TitlesList,
  },
  {
    key: 'departments',
    text: 'tabs.departments',
    url: '/departments',
    component: DepartmentsList,
  },
  {
    key: 'activityTypes',
    text: 'tabs.activityTypes',
    url: '/activityTypes',
    component: ActivityTypesList,
  },
];

class Settings extends PureComponent {
  render() {
    return (
      <div>
        <Tabs>
          {TABS.map(tab => (
            <TabPane tab={i18next.t(tab.text)} key={tab.key}>
              <tab.component noCardWrapper layoutButtonCreate="no-inline" {...this.props} />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

Settings.propTypes = {};

export default Settings;
