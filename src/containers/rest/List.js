import React, { useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { pick, isEmpty } from 'lodash';
import { connect, useDispatch, useSelector } from 'react-redux';
import CRUDActions from 'redux/crudActions';
import crudSelectors from 'redux/crudSelectors';
import RestListComponent from 'components/RestLayout/List';
import {
  getFilterFromUrl,
  getSearch,
  getValidData,
  convertObjToSearchStr,
} from 'utils/tools';
import { PRIMARY_KEY } from 'redux/crudCreator/dataProvider';
import useRouter from 'hooks/useRouter';

const RestList = (props) => {
  const { location, history } = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(crudSelectors[props.resource].getLoading);
  const resourceData = useSelector(crudSelectors[props.resource].getDataArr);
  const resourceFilter = useSelector(crudSelectors[props.resource].getFilters);
  const { initialFilter, defaultOptions } = props;
  const retrieveList = useCallback(
    (filter = { filter: {} }, isRefresh) =>
      dispatch(
        CRUDActions[props.resource].getAll({
          data: {
            ...props.initialFilter,
            ...filter,
            filter:
              props.initialFilter?.filter && filter.filter
                ? { ...props.initialFilter.filter, ...filter.filter }
                : props.initialFilter?.filter || filter.filter,
          },
          options: { ...defaultOptions, isRefresh },
        }),
      ),
    [dispatch, props.resource, defaultOptions, props.initialFilter],
  );
  useLayoutEffect(() => {
    const { getFromUrl } = props;
    const filter =
      (getFromUrl && getFilterFromUrl(location.search)) || initialFilter;
    retrieveList(isEmpty(filter) || { limit: 10, offset: 0, filter: {} }, true);
    // eslint-disable-next-line
  }, []);

  const pushQuery = (searchStr) => {
    history.push(
      props.customPath
        ? `${props.customPath}?${searchStr}`
        : `${location.pathname}?${searchStr}`,
    );
  };

  const pushRoute = (data) => history.push(data);

  const retrievedList = (filter, isRefresh = true) => {
    const { isUpdateRoute } = props;
    isUpdateRoute && pushQuery(getSearch(filter));
    retrieveList(filter, isRefresh);
  };

  const gotoEditPage = (id) => {
    const { redirects, resource } = props;
    const route = `/${resource}/${id}/edit`;
    if (redirects.edit === 'modal') {
      pushRoute(`#${resource}/${id}/edit`);
    } else {
      pushRoute(route);
    }
  };

  const gotoShowPage = (id) => {
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
    const route = `${rootPath}/${resource}/create?${convertObjToSearchStr(
      initCreateData,
    )}`;
    if (redirects.create === 'modal') {
      pushRoute(`#${resource}/create?${convertObjToSearchStr(initCreateData)}`);
    } else {
      pushRoute(route);
    }
  };

  const getFilterData = () => {
    const { isUpdateRoute } = props;
    const filter =
      (location && getFilterFromUrl(location.search)) || props.initialFilter;
    return isUpdateRoute
      ? {
          ...filter,
          ...pick(resourceFilter, ['limit', 'offset', 'count', 'orderBy']),
          limit: resourceFilter.limit || filter?.limit,
          offset: resourceFilter.offset || filter?.offset,
          orderBy: resourceFilter.orderBy || filter?.orderBy,
        }
      : getValidData(resourceFilter);
  };
  return (
    <RestListComponent
      header={`${props.resource}.header`}
      {...props}
      loading={loading}
      resourceData={resourceData}
      resourceFilter={getFilterData()}
      gotoEditPage={gotoEditPage}
      gotoCreatePage={gotoCreatePage}
      gotoShowPage={gotoShowPage}
      retrieveList={retrievedList}
    />
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => ({
  customQuery: (id, queryUrl, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource].edit({
        data: {
          ...data,
          [PRIMARY_KEY]: id,
        },
        options: {
          ...props.defaultOptions,
          isChangeToEdit,
          customApiResource: queryUrl,
          isBack: false,
        },
      }),
    ),
  updateRecord: (id, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource].edit({
        data: {
          ...data,
          [PRIMARY_KEY]: id,
        },
        options: { ...props.defaultOptions, isChangeToEdit, isBack: false },
      }),
    ),
  deleteItem: (id) =>
    dispatch(
      CRUDActions[props.resource].del({
        data: {
          [PRIMARY_KEY]: id,
        },
        options: { ...props.defaultOptions, isBack: false },
      }),
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
  defaultOptions: PropTypes.object,
  getFromUrl: PropTypes.bool,
};

ConnectRestList.propTypes = {
  retrieveList: PropTypes.func,
  initialFilter: PropTypes.object,
  resource: PropTypes.string,
  redirects: PropTypes.object,
  rootPath: PropTypes.string,
  isUpdateRoute: PropTypes.bool,
  initCreateData: PropTypes.object,
  defaultOptions: PropTypes.object,
};

ConnectRestList.defaultProps = {
  isUpdateRoute: true,
  rootPath: '',
  getFromUrl: true,
  redirects: {
    edit: 'modal',
    create: 'modal',
  },
  defaultOptions: {},
  initCreateData: {},
};

export default ConnectRestList;
