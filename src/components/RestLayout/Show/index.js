import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import ButtonEdit from '../../RestActions/EditButton';
import DeleteButton from '../../RestActions/DeleteButton';
import BackButton from '../../RestActions/BackButton';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import ActionView from '../ActionLayout';
import PageTitle from '../../common/PageTitle';
import { makeBreadCrumbFromPath } from '../../../utils/tools';

class RestShowComponent extends Component {
  state = {};

  render() {
    const {
      noCardWrapper,
      noActions,
      onBack,
      deleteItem,
      gotoEditPage,
      record,
      resource,
      children,
      hasEdit,
      hasDel,
      title,
      location,
    } = this.props;
    const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);

    if (!record) return null;

    const actions = (
      <div>
        <BackButton resource={resource} record={record} onBack={onBack} />
        {hasEdit && <ButtonEdit resource={resource} record={record} gotoEditPage={gotoEditPage} />}
        {hasDel && <DeleteButton resource={resource} record={record} deleteItem={deleteItem} />}
      </div>
    );

    const components = React.Children.map(children, element =>
      React.cloneElement(element, { key: element.props.source, record })
    );

    const content = (
      <div style={{ width: '100%', height: '100%' }}>
        {!noActions && <ActionView>{actions}</ActionView>}
        {components}
      </div>
    );

    return noCardWrapper ? (
      content
    ) : (
      <Layout bordered={false} extra={actions}>
        {title || (
          <PageTitle>
            <CustomBreadcrumb data={BREADCRUMB_LIST} />
          </PageTitle>
        )}
        <Box>{content}</Box>
      </Layout>
    );
  }
}
RestShowComponent.propTypes = {
  children: PropTypes.node,
  record: PropTypes.object,
  noCardWrapper: PropTypes.bool,
  onBack: PropTypes.func,
  deleteItem: PropTypes.func,
  gotoEditPage: PropTypes.func,
  resource: PropTypes.string,
  hasEdit: PropTypes.bool,
  hasDel: PropTypes.bool,
  title: PropTypes.any,
  noActions: PropTypes.bool,
  location: PropTypes.object,
};

RestShowComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestShowComponent;
