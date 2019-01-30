import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import CRUDActions from '../../../redux/crudActions';
import { retrieveReference } from '../../../redux/referenceData/actions';
import { getRecordData, upperCaseFirstChart } from '../../../utils/tools';
import { getReferenceResource } from '../../../redux/referenceData/selectors';
import { getLoading, getTotal } from '../../../redux/crudCreator/selectors';

class RestReference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
    };
  }

  componentDidMount() {
    const { record, source, initialFilter } = this.props;
    if (getRecordData(record, source)) {
      this.props.retrieveReference(getRecordData(record, source));
    } else {
      this.props.retrieveList(initialFilter || {});
    }
    this.debouceSearch = _.debounce(this.onSearch, 300);
  }

  componentWillUpdate(nextProps) {
    const { initialFilter, retrieveList } = this.props;
    if (!_.isEqual(initialFilter, nextProps.initialFilter)) {
      retrieveList(nextProps.initialFilter);
    }
  }

  onSearch = value => {
    const { searchKey, retrieveList } = this.props;
    if (searchKey) {
      retrieveList({ filter: { [searchKey]: { $like: value } } });
    }
  };

  retrieveListWaypoint = () => {
    const { count, retrieveList } = this.props;
    const { limit } = this.state;
    if (limit < count) {
      const newLimit = limit + 10;
      this.setState({ limit: newLimit });
      retrieveList({ limit: newLimit });
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
    });
    return newChildren;
  }
}
RestReference.propTypes = {
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
  count: PropTypes.number,
  loadingData: PropTypes.bool,
  initialFilter: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  resourceData: getReferenceResource(state, props),
  loadingData: getLoading(state, props),
  count: getTotal(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveReference: data =>
    dispatch(
      retrieveReference(props.resource, Array.isArray(data) ? data : [data], props.mappedBy)
    ),
  retrieveList: (filter, isRefresh) =>
    dispatch(
      dispatch(
        CRUDActions[props.resource][`getAll${upperCaseFirstChart(props.resource)}`](
          {
            ...props.initialFilter,
            ...filter,
          },
          { isRefresh }
        )
      )
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestReference);
