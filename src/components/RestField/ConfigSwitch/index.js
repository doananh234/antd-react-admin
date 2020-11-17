import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { getRecordData } from 'utils/tools';

const ConfigSwitch = ({ record, loading, source, suffixQuery, customQuery }) => (
  <Switch
    loading={loading}
    checked={getRecordData(record, source)}
    onChange={e => {
      customQuery(record.id, `${suffixQuery}/${e}`);
      return e;
    }}
  />
);

ConfigSwitch.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  customQuery: PropTypes.func,
  suffixQuery: PropTypes.string,
  loading: PropTypes.bool,
};

export default ConfigSwitch;
