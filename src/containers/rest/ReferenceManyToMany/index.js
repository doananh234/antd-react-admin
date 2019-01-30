import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveReference } from '../../../redux/referenceData/actions';
import { getRecordData } from '../../../utils/tools';
import { getReferenceLoading, getReferenceData } from '../../../redux/referenceData/selectors';

class RestReferenceManyToMany extends Component {
  componentDidMount() {
    const { record, source } = this.props;
    this.props.retrieveReference(getRecordData(record, source));
  }

  render() {
    const {
      resourceData,
      resource,
      retrieveList,
      children,
      type,
      gotoShowPage,
      isLink,
      loading,
      rootPath,
    } = this.props;
    return (
      <div>
        {type === 'singleElement'
          ? resourceData.map(data =>
              isLink ? (
                <Link
                  key={Math.random()}
                  href={`${rootPath}/${resource}/${data.id}/edit`}
                  to={`${rootPath}/${resource}/${data.id}/edit`}
                >
                  {React.cloneElement(children, {
                    record: data,
                    loading,
                    retrieveList,
                  })}
                </Link>
              ) : (
                React.cloneElement(children, {
                  key: Math.random(),
                  resourceData: {
                    list: resourceData,
                    count: resourceData.length,
                  },
                  loading,
                  record: data,
                  retrieveList,
                })
              )
            )
          : React.cloneElement(children, {
              resourceData: {
                list: resourceData,
                count: resourceData.length,
              },
              loading,
              retrieveList,
              gotoShowPage,
            })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  resourceData: getReferenceData(state, props),
  loading: getReferenceLoading(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveReference: ids => dispatch(retrieveReference(props.resource, ids, props.mappedBy)),
  gotoShowPage: id => props.history.push(`/auth/${props.resource}/${id}/show`),
});

RestReferenceManyToMany.propTypes = {
  resourceData: PropTypes.array,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  gotoShowPage: PropTypes.func,
  resource: PropTypes.string,
  isLink: PropTypes.bool,
  loading: PropTypes.bool,
  rootPath: PropTypes.string,
  type: PropTypes.oneOf(['singleElement', 'list', 'table']),
};

RestReferenceManyToMany.defaultProps = {
  type: 'singleElement',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestReferenceManyToMany);
