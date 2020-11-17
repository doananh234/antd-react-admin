import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Spin, Tag } from 'antd';
import { getRecordData } from 'utils/tools';
import Title from '../../common/Title';

const BooleanField = (props) =>
  props.loading ? (
    <Spin />
  ) : (
    (props.record && (
      <div>
        {!props.table && <Title>{props.header}</Title>}
        <Tag color={!props.record[props.source] ? '#f50' : '#2db7f5'}>
          {getRecordData(props.record, props.source) ? 'Có' : 'Không'}
        </Tag>
      </div>
    )) || (
      <div>
        {!props.table && <Title>{props.header}</Title>}
        <Tag color={!props.value ? '#f50' : '#2db7f5'}>
          {String(props.value ? 'Có' : 'Không')}
        </Tag>
      </div>
    )
  );

BooleanField.propTypes = {
  table: PropTypes.bool,
  source: PropTypes.string,
  record: PropTypes.object,
  header: PropTypes.any,
  loading: PropTypes.bool,
  value: PropTypes.bool,
};

export default withTheme(BooleanField);
