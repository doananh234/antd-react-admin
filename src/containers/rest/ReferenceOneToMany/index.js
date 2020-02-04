import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CRUDActions from '../../../redux/crudActions';
import { getRecordData } from '../../../utils/tools';
import { searchReference } from '../../../redux/referenceData/slice';
import { getReferenceArr } from '../../../redux/referenceData/selectors';
import { PRIMARY_KEY } from '../../../redux/crudCreator/slice';

class RefOneToMany extends Component {
  componentDidMount() {
    const { record, source, mappedBy, formatQuery } = this.props;
    this.props.retrieveList(
      formatQuery
        ? formatQuery(record)
        : {
            where: {
              [mappedBy]: { $in: [getRecordData(record, source)] },
            },
          },
    );
  }

  onSearch = text => {
    const { searchProp } = this.props;
    this.props.search({
      where: {
        [searchProp]: {
          $text: {
            $search: {
              $term: text,
            },
          },
        },
      },
    });
  };

  addReference = data => {
    const { record, source, mappedBy } = this.props;
    const convertData = data.map(item => ({
      ...item,
      [mappedBy]: getRecordData(record, source),
    }));
    this.props.updateReference(convertData);
  };

  render() {
    const {
      resourceData,
      retrieveList,
      children,
      gotoShowPage,
      deleteItem,
      gotoEditPage,
      record,
      source,
    } = this.props;

    return (
      <div>
        {React.cloneElement(children, {
          record,
          source,
          resourceData: {
            list: resourceData,
            count: resourceData.length,
          },
          retrieveList,
          gotoShowPage,
          gotoEditPage,
          deleteItem,
        })}
      </div>
    );
  }
}

RefOneToMany.propTypes = {
  resourceData: PropTypes.array,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  updateReference: PropTypes.func,
  gotoShowPage: PropTypes.func,
  mappedBy: PropTypes.string,
  deleteItem: PropTypes.func,
  gotoEditPage: PropTypes.func,
  searchProp: PropTypes.any,
  search: PropTypes.func,
  formatQuery: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  resourceData: getReferenceArr(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  search: (text, searchKey) =>
    dispatch(searchReference(props.resource, text, searchKey)),
  retrieveList: (filter, isRefresh) =>
    dispatch(
      CRUDActions[props.resource].getAll(filter, {
        isRefresh,
      }),
    ),
  gotoShowPage: id => props.history.push(`/auth/${props.resource}/${id}/show`),
  gotoEditPage: id => props.history.push(`/auth/${props.resource}/${id}/edit`),
  deleteItem: id =>
    dispatch(
      CRUDActions[props.resource].edit({
        [PRIMARY_KEY]: id,
        [props.mappedBy]: null,
      }),
    ),
});

const RefOneToManyConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RefOneToMany);

RefOneToManyConnected.defaultProps = {
  showAddReferenceForm: true,
};

export default RefOneToManyConnected;
