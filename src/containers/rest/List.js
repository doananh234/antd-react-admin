import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import { connect, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import CRUDActions from 'redux/crudActions';
import crudSelectors from 'redux/crudSelectors';
import RestListComponent from 'components/RestLayout/List';
import {
  getFilterFromUrl,
  getSearch,
  getValidData,
  convertObjToSearchStr,
} from 'utils/tools';
import { PRIMARY_KEY } from 'redux/crudCreator/slice';
import useRouter from 'hooks/useRouter';

const RestList = props => {
  const { location } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const filter =
      (location && getFilterFromUrl(location.search)) || props.initialFilter;
    props.retrieveList(filter || { limit: 20, page: 1, filter: {} }, true);
  }, []);

  const pushQuery = searchStr => {
    dispatch(
      push(
        props.customPath
          ? `${props.customPath}?${searchStr}`
          : `${location.pathname}?${searchStr}`,
      ),
    );
  };

  const pushRoute = data => dispatch(push(data));

  const retrieveList = filter => {
    const { isUpdateRoute } = props;
    isUpdateRoute && pushQuery(getSearch(filter));
    props.retrieveList(filter, true);
  };

  const gotoEditPage = id => {
    const { redirects, resource } = props;
    const route = `/${resource}/${id}/edit`;
    if (redirects.edit === 'modal') {
      pushRoute(`#${resource}/${id}/edit`);
    } else {
      pushRoute(route);
    }
  };

  const gotoShowPage = id => {
    const { redirects, resource } = props;
    const route = `/${resource}/${id}/show`;
    if (redirects.edit === 'modal') {
      pushRoute(`#${resource}/${id}/show`);
    } else {
      pushRoute(route);
    }
  };

  const gotoCreatePage = () => {
    const { redirects, resource, rootPath, initCreateData } = props;
    const route = `${rootPath}/${resource}/create`;
    if (redirects.create === 'modal') {
      pushRoute(`#${resource}/create?${convertObjToSearchStr(initCreateData)}`);
    } else {
      pushRoute(route);
    }
  };

  const getFilterData = () => {
    const { resourceFilter, isUpdateRoute } = props;
    const filter =
      (location && getFilterFromUrl(location.search)) || props.initialFilter;
    return isUpdateRoute
      ? { ...filter, ...pick(resourceFilter, ['limit', 'page', 'count']) }
      : getValidData(resourceFilter);
  };

  return (
    <RestListComponent
      header={`${props.resource}.header`}
      {...props}
      resourceFilter={getFilterData()}
      gotoEditPage={gotoEditPage}
      gotoCreatePage={gotoCreatePage}
      gotoShowPage={gotoShowPage}
      retrieveList={retrieveList}
    />
  );
};

const mapStateToProps = (state, props) => ({
  loading: crudSelectors[props.resource].getLoading(state, props),
  resourceData: crudSelectors[props.resource].getDataArr(state, props),
  resourceFilter: crudSelectors[props.resource].getFilters(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveList: (filter = { filter: {} }, isRefresh) =>
    dispatch(
      CRUDActions[props.resource].getAll(
        {
          ...props.initialFilter,
          ...filter,
          filter:
            props.initialFilter?.filter && filter.filter
              ? { ...props.initialFilter.filter, ...filter.filter }
              : props.initialFilter?.filter || filter.filter,
        },
        { ...props.defaultOptions, isRefresh },
      ),
    ),
  customQuery: (id, queryUrl, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource].edit(
        {
          ...data,
          [PRIMARY_KEY]: id,
        },
        {
          ...props.defaultOptions,
          isChangeToEdit,
          customApiResource: queryUrl,
          isBack: false,
        },
      ),
    ),
  updateRecord: (id, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource].edit(
        {
          ...data,
          [PRIMARY_KEY]: id,
        },
        { ...props.defaultOptions, isChangeToEdit, isBack: false },
      ),
    ),
  deleteItem: id =>
    dispatch(
      CRUDActions[props.resource].del(
        {
          [PRIMARY_KEY]: id,
        },
        { ...props.defaultOptions, isBack: false },
      ),
    ),
  exportExcel: () => dispatch(CRUDActions[props.resource].exportExcel()),
});

const ConnectRestList = connect(mapStateToProps, mapDispatchToProps)(RestList);

RestList.propTypes = {
  retrieveList: PropTypes.func,
  initialFilter: PropTypes.object,
  resource: PropTypes.string,
  redirects: PropTypes.object,
  rootPath: PropTypes.string,
  isUpdateRoute: PropTypes.bool,
  initCreateData: PropTypes.object,
  resourceFilter: PropTypes.object,
  customPath: PropTypes.string,
};

ConnectRestList.propTypes = {
  retrieveList: PropTypes.func,
  initialFilter: PropTypes.object,
  resource: PropTypes.string,
  redirects: PropTypes.object,
  rootPath: PropTypes.string,
  isUpdateRoute: PropTypes.bool,
  initCreateData: PropTypes.object,
};

ConnectRestList.defaultProps = {
  isUpdateRoute: true,
  rootPath: '',
  redirects: {
    edit: 'modal',
    create: 'modal',
  },
  defaultOptions: {},
  initCreateData: {},
};

export default ConnectRestList;
