import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { makeBreadCrumbFromPath } from 'utils/tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import BackButton from '../../RestActions/BackButton';
import RestCreateForm from '../RestCreateForm';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import PageTitle from '../../common/PageTitle';

const RestCreateComponent = (props) => {
  const { onBack, showModal, header, noCardWrapper, breadCrumb } = props;
  const location = useLocation();
  const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);
  const actions = <BackButton onBack={onBack} />;

  const content = (
    <div style={{ width: '100%' }}>
      <RestCreateForm {...props} />
    </div>
  );

  return showModal || noCardWrapper ? (
    content
  ) : (
      <Layout bordered={false} extra={actions}>
        {header || (
          <PageTitle>
            <CustomBreadcrumb data={breadCrumb || BREADCRUMB_LIST} />
          </PageTitle>
        )}
        {<Box>{content}</Box>}
      </Layout>
    );
};

RestCreateComponent.propTypes = {
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  header: PropTypes.any,
  location: PropTypes.object,
  noCardWrapper: PropTypes.bool,
  breadCrumb: PropTypes.array,
};
RestCreateComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestCreateComponent;
