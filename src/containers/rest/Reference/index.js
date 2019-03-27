import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveReference } from '../../../redux/referenceData/actions';
import { getRecordData } from '../../../utils/tools';
import { getReferenceData, getReferenceLoading } from '../../../redux/referenceData/selectors';

class RestReference extends Component {
  componentDidMount() {
    const { source, record } = this.props;
    this.props.retrieveReference(getRecordData(record, source));
  }

  render() {
    const {
      resourceData,
      resource,
      record,
      children,
      retrieveList,
      source,
      rootPath,
      isLink,
      loading,
    } = this.props;
    return isLink ? (
      <Link
        href={`${rootPath}/${resource}/${
          resourceData ? resourceData.id : getRecordData(record, source)
        }/edit`}
        to={`${rootPath}/${resource}/${
          resourceData ? resourceData.id : getRecordData(record, source)
        }/edit`}
      >
        {React.Children.map(children, element =>
          React.cloneElement(element, {
            record: resourceData,
            resource,
            retrieveList,
            loading,
          })
        )}
      </Link>
    ) : (
      React.Children.map(children, element =>
        React.cloneElement(element, {
          record: resourceData,
          resource,
          retrieveList,
          loading,
        })
      )
    );
  }
}

RestReference.propTypes = {
  resourceData: PropTypes.object,
  resource: PropTypes.string,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  rootPath: PropTypes.string,
  isLink: PropTypes.bool,
  loading: PropTypes.bool,
};

RestReference.defaultProps = {
  rootPath: '',
};

const mapStateToProps = (state, props) => ({
  resourceData: getReferenceData(state, props),
  loading: getReferenceLoading(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveReference: id =>
    dispatch(retrieveReference(props.resource, id ? [id] : [], props.mappedBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestReference);
