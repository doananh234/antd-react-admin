import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import RestEditForm from '../RestEditForm';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import PageTitle from '../../common/PageTitle';

class RestEditComponent extends Component {
  state = {};

  render() {
    const { showModal, title, noCardWrapper, location } = this.props;
    const BREADCRUMB_LIST = [];
    const paths = location.pathname.split('/');
    paths.forEach((data, index) => {
      BREADCRUMB_LIST.push({
        title: data,
        path: `${BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''}/${data}`,
      });
    });
    if (title && !showModal) {
      BREADCRUMB_LIST[paths.length].title = title || BREADCRUMB_LIST[paths.length].title;
    }
    const actions = <div />;
    return !showModal && !noCardWrapper ? (
      <Layout bordered={false} extra={actions}>
        <PageTitle>
          <CustomBreadcrumb data={BREADCRUMB_LIST} />
        </PageTitle>
        <Box>
          <RestEditForm {...this.props} />
        </Box>
      </Layout>
    ) : (
      <RestEditForm {...this.props} />
    );
  }
}

RestEditComponent.propTypes = {
  location: PropTypes.object,
  showModal: PropTypes.bool,
  title: PropTypes.any,
  noCardWrapper: PropTypes.bool,
};

RestEditComponent.defaultProps = {
  noCardWrapper: false,
};

export default RestEditComponent;
