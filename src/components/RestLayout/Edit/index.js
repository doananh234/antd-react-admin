import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { makeBreadCrumbFromPath } from 'utils/tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import RestEditForm from '../RestEditForm';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import PageTitle from '../../common/PageTitle';

const RestEditComponent = (props) => {
  const { showModal, header, noCardWrapper, breadCrumb } = props;
  const location = useLocation();
  const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);
  if (header && !showModal) {
    BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title =
      header || BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title;
  }
  const actions = <div />;

  const content = (
    <div style={{ width: '100%' }}>
      <RestEditForm {...props} />
    </div>
  );
  return showModal || noCardWrapper ? (
    content
  ) : (
      <Layout bordered={false} extra={actions}>
        <PageTitle
          extraAction={<h1><CustomBreadcrumb data={breadCrumb || BREADCRUMB_LIST} /></h1>}
        >
          {header}
        </PageTitle>
        <Box>{content}</Box>
      </Layout>
    )
};
RestEditComponent.propTypes = {
  location: PropTypes.object,
  showModal: PropTypes.bool,
  header: PropTypes.any,
  noCardWrapper: PropTypes.bool,
  breadCrumb: PropTypes.array,
};

RestEditComponent.defaultProps = {
  noCardWrapper: false,
};

export default RestEditComponent;
