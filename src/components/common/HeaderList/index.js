import React from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../Breadcrumb';
import CreateButton from '../../RestActions/CreateButton';

const HeaderList = ({ data, createButtonText, ...props }) => (
  <div className="t-500-24px-1.17">
    <CustomBreadcrumb data={data} />
    {createButtonText && <CreateButton {...props} header={createButtonText} />}
  </div>
);
HeaderList.propTypes = {
  data: PropTypes.array,
  createButtonText: PropTypes.string,
};

export default HeaderList;
