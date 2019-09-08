import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import CRUDActions from '../../../redux/crudActions';
import crudSelectors from '../../../redux/crudSelectors';
import RestListComponent from '../../../components/RestLayout/List';
import {
  getFilterFromUrl,
  getSearch,
  upperCaseFirstChart,
  getValidData,
  convertObjToSearchStr,
} from '../../../utils/tools';
import { PRIMARY_KEY } from '../../../redux/crudCreator/actions';

class RestList extends Component {
  componentDidMount() {
    const filter =
      (this.props.location && getFilterFromUrl(this.props.location.search)) ||
      this.props.initialFilter;
    this.props.retrieveList(filter || { limit: 20, page: 1, filter: {} }, true);
  }

  // shouldComponentUpdate(nextProps) {
  //   const { location, resource, rootPath } = nextProps;
  //   if (location.pathname === `${rootPath}/${resource}`) {
  //     return true;
  //   }
  //   return false;
  // }

  retrieveList = filter => {
    const { isUpdateRoute } = this.props;
    isUpdateRoute && this.props.pushQuery(getSearch(filter));
    this.props.retrieveList(filter, true);
  };

  gotoEditPage = id => {
    const { redirects, pushRoute, resource, rootPath } = this.props;
    const route = `${rootPath}/${resource}/${id}/edit`;
    if (redirects.edit === 'modal') {
      pushRoute(`#${resource}/${id}/edit`);
    } else {
      pushRoute(route);
    }
  };

  gotoShowPage = id => {
    const { redirects, pushRoute, resource, rootPath } = this.props;
    const route = `${rootPath}/${resource}/${id}/show`;
    if (redirects.edit === 'modal') {
      pushRoute(`#${resource}/${id}/edit`);
    } else {
      pushRoute(route);
    }
  };

  gotoCreatePage = () => {
    const { redirects, pushRoute, resource, rootPath, initCreateData } = this.props;
    const route = `${rootPath}/${resource}/create`;
    if (redirects.create === 'modal') {
      pushRoute(`#${resource}/create?${convertObjToSearchStr(initCreateData)}`);
    } else {
      pushRoute(route);
    }
  };

  getFilterData = () => {
    const { resourceFilter, isUpdateRoute } = this.props;
    const filter =
      (this.props.location && getFilterFromUrl(this.props.location.search)) ||
      this.props.initialFilter;
    return isUpdateRoute
      ? { ...filter, ...pick(resourceFilter, ['limit', 'page', 'count']) }
      : getValidData(resourceFilter);
  };

  render() {
    return (
      <RestListComponent
        header={`${this.props.resource}.title`}
        {...this.props}
        resourceFilter={this.getFilterData()}
        gotoEditPage={this.gotoEditPage}
        gotoCreatePage={this.gotoCreatePage}
        gotoShowPage={this.gotoShowPage}
        retrieveList={this.retrieveList}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: crudSelectors[props.resource].getLoading(state, props),
  resourceData: crudSelectors[props.resource].getDataArr(state, props),
  resourceFilter: crudSelectors[props.resource].getFilters(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveList: (filter, isRefresh) =>
    dispatch(
      CRUDActions[props.resource][`getAll${upperCaseFirstChart(props.resource)}`](
        {
          ...props.initialFilter,
          ...filter,
        },
        { ...props.defaultOptions, isRefresh }
      )
    ),
  customQuery: (id, queryUrl, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource][`edit${upperCaseFirstChart(props.resource)}`](
        {
          ...data,
          [PRIMARY_KEY]: id,
        },
        { isChangeToEdit, customApiResource: queryUrl, isBack: false }
      )
    ),
  updateRecord: (id, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource][`edit${upperCaseFirstChart(props.resource)}`](
        {
          ...data,
          [PRIMARY_KEY]: id,
        },
        { isChangeToEdit, isBack: false }
      )
    ),
  deleteItem: id =>
    dispatch(
      CRUDActions[props.resource][`delete${upperCaseFirstChart(props.resource)}`](
        {
          [PRIMARY_KEY]: id,
        },
        { isBack: false }
      )
    ),
  exportExcel: () =>
    dispatch(CRUDActions[props.resource][`exportExcel${upperCaseFirstChart(props.resource)}`]()),
  pushQuery: searchStr => dispatch(push(`${props.rootPath}/${props.resource}?${searchStr}`)),
  pushRoute: data => dispatch(push(data)),
});

const ConnectRestList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestList);

RestList.propTypes = {
  location: PropTypes.object,
  pushQuery: PropTypes.func,
  retrieveList: PropTypes.func,
  initialFilter: PropTypes.object,
  resource: PropTypes.string,
  redirects: PropTypes.object,
  pushRoute: PropTypes.func,
  rootPath: PropTypes.string,
  isUpdateRoute: PropTypes.bool,
};

ConnectRestList.propTypes = {
  location: PropTypes.object,
  pushQuery: PropTypes.func,
  retrieveList: PropTypes.func,
  initialFilter: PropTypes.object,
  resource: PropTypes.string,
  redirects: PropTypes.object,
  pushRoute: PropTypes.func,
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
