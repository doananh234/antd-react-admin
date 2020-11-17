import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { makeBreadCrumbFromPath } from 'utils/tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import ButtonEdit from '../../RestActions/EditButton';
import DeleteButton from '../../RestActions/DeleteButton';
import Layout from '../../common/Layout';
import ActionView from '../ActionLayout';
import PageTitle from '../../common/PageTitle';

const RestShowComponent = ({
  noCardWrapper,
  noActions,
  deleteItem,
  gotoEditPage,
  record,
  resource,
  children,
  hasEdit,
  hasDel,
  header,
}) => {
  const location = useLocation();
  const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);

  if (!record) return null;

  const actions = (
    <div>
      {hasEdit && (
        <ButtonEdit
          resource={resource}
          record={record}
          gotoEditPage={gotoEditPage}
        />
      )}
      {hasDel && (
        <DeleteButton
          resource={resource}
          record={record}
          deleteItem={deleteItem}
        />
      )}
    </div>
  );

  const components = React.Children.map(children, (element) =>
    React.cloneElement(element, { key: element.props.source, record }),
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
      {header || (
        <PageTitle>
          <CustomBreadcrumb data={BREADCRUMB_LIST} />
        </PageTitle>
      )}
      {content}
    </Layout>
  );
};

RestShowComponent.propTypes = {
  children: PropTypes.node,
  record: PropTypes.object,
  noCardWrapper: PropTypes.bool,
  deleteItem: PropTypes.func,
  gotoEditPage: PropTypes.func,
  resource: PropTypes.string,
  hasEdit: PropTypes.bool,
  hasDel: PropTypes.bool,
  header: PropTypes.any,
  noActions: PropTypes.bool,
};

RestShowComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestShowComponent;
