import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import { RatingWrapper } from './style';
import Text from '../../common/Text';

const RatingField = (props) => (
  <RatingWrapper>
    <div>
      <Rate
        value={
          getRecordData(props.record, props.totalRate) /
          getRecordData(props.record, props.totalRater)
        }
        disabled={props.disabled}
        allowHalf
      />
    </div>
    <div>
      {!props.isHideTotalRater && (
        <Text type="bodyGray">
          (
          {getRecordData(props.record, props.totalRater) || 0}
          )
        </Text>
      )}
    </div>
  </RatingWrapper>
);

RatingField.propTypes = {
  record: PropTypes.object,
  disabled: PropTypes.bool,
  isHideTotalRater: PropTypes.bool,
  totalRate: PropTypes.string,
  totalRater: PropTypes.string,
};

export default RatingField;
