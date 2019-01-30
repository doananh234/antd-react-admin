import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { getRecordData } from '../../../utils/tools';

const ConfigSwitch = props => (
  <Switch
    loading={props.loading}
    checked={getRecordData(props.record, props.source)}
    onChange={e => {
        props.customQuery(props.record.id, `${props.suffixQuery}/${e}`);
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
