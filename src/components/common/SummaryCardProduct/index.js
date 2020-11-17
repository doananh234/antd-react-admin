import React from 'react';
import PropTypes from 'prop-types';
import SummaryCardProductStyles from './style';

const SummaryCardProduct = ({ name, description, className }) => {
  return (
    <SummaryCardProductStyles className={className}>
      <div className="icon-summary">
        {/* <Icon type={icon} style={{ color }} /> */}
      </div>
      <div className="name-summary">{name}</div>

      <div className="description-summarry">{description}</div>
    </SummaryCardProductStyles>
  );
};

SummaryCardProduct.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default SummaryCardProduct;
