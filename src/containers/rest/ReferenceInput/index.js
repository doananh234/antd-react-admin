import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form } from 'antd';
import { connect } from 'react-redux';
import CRUDActions from '../../../redux/crudActions';
import { retrieveReference } from '../../../redux/referenceData/actions';
import { getRecordData, upperCaseFirstChart } from '../../../utils/tools';
import {
  getReferenceResource,
  getTotalReference,
  getEnabledLoadMoreReference,
} from '../../../redux/referenceData/selectors';
import crudSelectors from '../../../redux/crudSelectors';

class ReferenceInput extends Component {
  componentDidMount() {
    const { record, source, initialFilter } = this.props;
    if (getRecordData(record, source)) {
      this.props.retrieveReference(getRecordData(record, source));
    }
    this.props.retrieveList(initialFilter || { page: 1 }, true);
    this.debouceSearch = _.debounce(this.onSearch, 300);
  }

  onSearch = value => {
    const { searchKey, retrieveList } = this.props;
    if (searchKey) {
      retrieveList({ filter: { [searchKey]: { $like: value } } }, true);
    }
  };

  retrieveListWaypoint = () => {
    const { enabledLoadMore, retrieveList } = this.props;
    if (enabledLoadMore) {
      retrieveList();
    }
  };

  render() {
    const {
      resourceData,
      record,
      children,
      source,
      getFieldDecorator,
      setFieldsValue,
      form,
      searchKey,
      loadingData,
      resource,
    } = this.props;

    const newChildren = React.cloneElement(children, {
      onSearch: value => {
        this.debouceSearch(value);
      },
      onEnter: () => this.retrieveListWaypoint(),
      searchKey,
      record,
      loading: loadingData,
      form,
      source,
      getFieldDecorator,
      setFieldsValue,
      resourceData,
      resource,
    });
    return newChildren;
  }
}
ReferenceInput.propTypes = {
  resource: PropTypes.string.isRequired,
  resourceData: PropTypes.array,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  getFieldDecorator: PropTypes.func,
  setFieldsValue: PropTypes.func,
  form: PropTypes.object,
  searchKey: PropTypes.string,
  enabledLoadMore: PropTypes.bool,
  loadingData: PropTypes.bool,
  initialFilter: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  resourceData: getReferenceResource(state, props),
  loadingData: crudSelectors[props.resource].getLoading(state, props),
  count: getTotalReference(state, props),
  enabledLoadMore: getEnabledLoadMoreReference(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveReference: data =>
    dispatch(
      retrieveReference(props.resource, Array.isArray(data) ? data : [data], props.mappedBy)
    ),
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({})(ReferenceInput));
