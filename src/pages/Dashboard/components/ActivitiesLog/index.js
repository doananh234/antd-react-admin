import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Text from 'components/common/Text';
import { formatDateTime } from '../../../../utils/textUtils';
import ActivitiesLogWrapper from './style';

const ActivitiesLog = ({ dataSource }) => (
  <ActivitiesLogWrapper>
    <List
      size="small"
      bordered
      dataSource={dataSource}
      className="list"
      renderItem={item => (
        <List.Item className="listItem">
          <div>
            <Text type="bodyBold">{item.message}</Text>
          </div>
          <div>
            <Text type="smallText">{formatDateTime(item.time)}</Text>
          </div>
        </List.Item>
      )}
    />
  </ActivitiesLogWrapper>
);
ActivitiesLog.propTypes = {
  dataSource: PropTypes.array,
};

export default ActivitiesLog;
