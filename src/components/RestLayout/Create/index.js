import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import BackButton from '../../RestActions/BackButton';
import RestCreateForm from '../RestCreateForm';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import PageTitle from '../../common/PageTitle';
import { makeBreadCrumbFromPath } from '../../../utils/tools';

class RestCreateComponent extends Component {
  constructor(props) {
    super(props);
    this.formCreateRef = React.createRef();
  }

  render() {
    const { onBack, showModal, title, location, noCardWrapper } = this.props;
    const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);
    const actions = <BackButton onBack={onBack} />;
    const content = (
      <div style={{ width: '100%' }}>
        <RestCreateForm {...this.props} />
      </div>
    );
    return showModal || noCardWrapper ? (
      content
    ) : (
      <Layout bordered={false} extra={actions}>
        {title || (
          <PageTitle>
            <CustomBreadcrumb data={BREADCRUMB_LIST} />
          </PageTitle>
        )}
        {<Box>{content}</Box>}
      </Layout>
    );
  }
}
RestCreateComponent.propTypes = {
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  title: PropTypes.any,
  location: PropTypes.object,
  noCardWrapper: PropTypes.bool,
};
RestCreateComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestCreateComponent;
