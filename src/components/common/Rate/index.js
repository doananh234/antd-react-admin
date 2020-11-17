import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';
import { roundToPrecision } from 'utils/tools';
import RateWrapper from './styles';

const RateCustom = ({ rate, disabled, allowHalf }) => {
  return (
    <RateWrapper>
      <Rate
        disabled={disabled}
        allowHalf={allowHalf}
        value={roundToPrecision(rate, 0.5)}
      />
    </RateWrapper>
  );
};
RateCustom.propTypes = {
  rate: PropTypes.number,
  disabled: PropTypes.bool,
  allowHalf: PropTypes.bool,
};

RateCustom.defaultProps = {
  disabled: true,
  allowHalf: true,
};

export default RateCustom;
