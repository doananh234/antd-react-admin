import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import CRUDActions from '../../../redux/crudActions';
import RestListComponent from '../../../components/RestLayout/List';
import { getFilterFromUrl, getSearch, upperCaseFirstChart } from '../../../utils/tools';
import { getLoading, getFilters, getDataArr } from '../../../redux/crudCreator/selectors';
import { showModal as showModalAction } from '../../../redux/modal/actions';
import { PRIMARY_KEY } from '../../../redux/crudCreator/actions';

class RestList extends Component {
  constructor(props) {
    super(props);
    const filter =
      (this.props.location && getFilterFromUrl(this.props.location.search)) ||
      this.props.initialFilter;
    this.props.retrieveList(filter || { limit: 10, page: 1, filter: {} }, true);
  }

  retrieveList = filter => {
    this.props.pushQuery(filter);
    this.props.retrieveList(filter, true);
  };

  gotoEditPage = id => {
    const { redirects, pushRoute, showModal, resource, rootPath } = this.props;
    const route = `${rootPath}/${resource}/${id}/edit`;
    if (redirects.edit === 'modal') {
      showModal(route);
    } else {
      pushRoute(route);
    }
  };

  gotoShowPage = id => {
    const { redirects, pushRoute, showModal, resource, rootPath } = this.props;
    const route = `${rootPath}/${resource}/${id}/show`;
    if (redirects.edit === 'modal') {
      showModal(route);
    } else {
      pushRoute(route);
    }
  };

  gotoCreatePage = () => {
    const { redirects, pushRoute, showModal, resource, rootPath } = this.props;
    const route = `${rootPath}/${resource}/create`;
    if (redirects.create === 'modal') {
      showModal(route);
    } else {
      pushRoute(route);
    }
  };

  render() {
    return (
      <RestListComponent
        {...this.props}
        gotoEditPage={this.gotoEditPage}
        gotoCreatePage={this.gotoCreatePage}
        gotoShowPage={this.gotoShowPage}
        retrieveList={this.retrieveList}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: getLoading(state, props),
  resourceData: getDataArr(state, props),
  resourceFilter: getFilters(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveList: (filter, isRefresh) =>
    dispatch(
      CRUDActions[props.resource][`getAll${upperCaseFirstChart(props.resource)}`](
        {
          ...props.initialFilter,
          ...filter,
        },
        { isRefresh }
      )
    ),
  customQuery: (id, queryUrl, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource][`edit${upperCaseFirstChart(props.resource)}`](
        {
          ...data,
          [PRIMARY_KEY]: id,
        },
        { isChangeToEdit, customApiResource: queryUrl }
      )
    ),
  updateRecord: (id, data, isChangeToEdit) =>
    dispatch(
      CRUDActions[props.resource][`edit${upperCaseFirstChart(props.resource)}`](
        {
          ...data,
          [PRIMARY_KEY]: id,
        },
        { isChangeToEdit }
      )
    ),
  deleteItem: id =>
    dispatch(
      CRUDActions[props.resource][`delete${upperCaseFirstChart(props.resource)}`]({
        [PRIMARY_KEY]: id,
      })
    ),
  pushQuery: filter => dispatch(push(`${props.rootPath}/${props.resource}?${getSearch(filter)}`)),
  showModal: data => dispatch(showModalAction(data)),
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
  showModal: PropTypes.func,
  rootPath: PropTypes.string,
};

ConnectRestList.defaultProps = {
  rootPath: '',
  redirects: {
    edit: 'modal',
    create: 'modal',
  },
};

export default ConnectRestList;
