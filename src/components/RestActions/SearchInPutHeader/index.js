import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import CRUDActions from '../../../redux/crudActions';

const SearchInputHeader = ({ search }) => {
  const onSearch = text => {
    search({
      q: text,
    });
  };
  return (
    <Input
      style={{ width: '180px' }}
      prefix=<SearchOutlined style={{ color: '#41433f' }} size={14} />
      onPressEnter={e => onSearch(e.target.value)}
    />
  );
};
SearchInputHeader.propTypes = {
  search: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => ({
  search: filter =>
    dispatch(
      CRUDActions[props.resource].getAll({
        ...props.initialFilter,
        ...filter,
        filter:
          props.initialFilter?.filter && filter.filter
            ? { ...props.initialFilter.filter, ...filter.filter }
            : props.initialFilter?.filter || filter.filter,
      }),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInputHeader);
