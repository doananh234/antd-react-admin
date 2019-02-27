import React, { Component } from 'react';
import { update } from 'lodash';
import PropTypes from 'prop-types';
import { Table, Button, Input, Icon } from 'antd';
import I18n from 'i18next';
import Text from '../../common/Text';
import { getRecordData } from '../../../utils/tools';
import { HeaderTableWrapper } from './styles';

class RestTableLayout extends Component {
  onChangePagination = (e, filters, sorter) => {
    const { resourceFilter, retrieveList } = this.props;
    const formatFilter = {};
    const formatSort =
      sorter && sorter.field ? `${sorter.order === 'descend' ? '-' : ''}${sorter.field}` : null;
    Object.keys(filters).forEach(filter => {
      const filterKey = filter.substring(0, filter.indexOf('-col'));
      const $in = filters[filter].filter(data => typeof data === 'string');
      const searchFilter = filters[filter].find(
        data => typeof data !== 'string' && data.searchText
      );
      update(formatFilter, filterKey, () => ({}));
      if ($in.length) {
        update(formatFilter, filterKey, () => ({ $in }));
      }
      if (searchFilter) {
        update(formatFilter, filterKey, () => ({ $like: searchFilter.searchText }));
      }
    });
    retrieveList({
      page: e.current,
      limit: e.pageSize,
      filter: { ...resourceFilter.filter, ...formatFilter },
      order: formatSort,
    });
  };

  onChangeRecord(record, item) {
    switch (item.props.type) {
      case 'switch':
        return this.props.updateRecord(
          record.id,
          {
            [item.props.source]: !record[item.props.source],
          },
          true
        );

      default:
        return null;
    }
  }

  handleSearch = confirm => {
    confirm();
  };

  handleReset = clearFilters => {
    clearFilters();
  };

  onBlur = (index, source) => e => {
    const { onEditHeaderSuccess } = this.props;
    onEditHeaderSuccess({ index, source, value: e.currentTarget.value });
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  getColumnSearchProps = (dataIndex, title, hasSearch) =>
    hasSearch
      ? {
          filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
            const searchSelected = selectedKeys.find(
              data => typeof data !== 'string' && data.searchText
            );
            const filters = selectedKeys.filter(data => typeof data === 'string');
            return (
              <div style={{ padding: 8 }}>
                <Input
                  ref={node => {
                    this.searchInput = node;
                  }}
                  placeholder={`Search ${I18n.t(title)}`}
                  value={searchSelected && searchSelected.searchText}
                  onChange={e =>
                    setSelectedKeys(
                      e.target.value ? [...filters, { searchText: e.target.value }] : [filters]
                    )
                  }
                  onPressEnter={() => this.handleSearch(confirm)}
                  style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                  type="primary"
                  onClick={() => this.handleSearch(confirm)}
                  icon="search"
                  size="small"
                  style={{ width: 90, marginRight: 8 }}
                >
                  {I18n.t('button.search')}
                </Button>
                <Button
                  onClick={() => {
                    setSelectedKeys([...filters]);
                    setTimeout(() => confirm());
                  }}
                  size="small"
                  style={{ width: 90 }}
                >
                  {I18n.t('button.reset')}
                </Button>
              </div>
            );
          },
          filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
          ),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => this.searchInput.select());
            }
          },
        }
      : {};

  render() {
    const {
      resourceData,
      children,
      // gotoEditPage,
      loading,
      // onRow,
      customQuery,
      resourceFilter,
    } = this.props;
    const columns = children.map((item, index) => ({
      fixed: item.props.fixed,
      title: (
        <HeaderTableWrapper
          onBlur={this.onBlur(index, item.props.source)}
          onKeyPress={this.onKeyPress}
          disabled={!item.props.isEditHeader}
          defaultValue={item.props.title ? I18n.t(item.props.title) : ''}
        />
      ),
      dataIndex: `${item.props.source}`,
      width: item.props.width,
      align: item.props.align,
      key: `${item.props.source}-col${index}`,
      sorter: item.props.sorter
        ? (a, b) => getRecordData(a, item.props.source) > getRecordData(b, item.props.source)
        : undefined,
      sortOrder: item.props.sortOrder,
      filters: item.props.filters,
      filterMultiple: item.props.filterMultiple,
      onFilter: (value, record) =>
        `${getRecordData(record, item.props.source)}`.search(`${value}`) > -1,
      render:
        item.props.render ||
        ((obj, record) => {
          const RecordComponent = React.cloneElement(item, {
            table: true,
            record,
            loading: resourceData.itemLoading && resourceData.itemLoading[record.id],
            onChange: () => this.onChangeRecord(record, item),
            customQuery,
            ...getAction(this.props, item),
          });
          return RecordComponent;
        }),
      ...this.getColumnSearchProps(item.props.source, item.props.title, item.props.hasSearch),
    }));

    return (
      <Table
        // onRow={record => ({
        //   onDoubleClick: () => {
        //     onRow ? onRow(record) : gotoEditPage(record.id);
        //   },
        // })}
        onChange={this.onChangePagination}
        pagination={{
          position: 'none',
          total: resourceFilter.count,
          current: resourceFilter.page,
          showTotal,
          pageSize: resourceFilter.limit,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        columns={columns}
        loading={loading}
        dataSource={resourceData || []}
        rowKey="id"
        // scroll={{ x: 1128 }}
      />
    );
  }
}

export const showTotal = (total, range) => (
  <Text type="button" className="txtTotal">
    {` ${range.join(' - ')}/${total} `}
    {/* <IntlMessages id={total > 1 ? 'text.records' : 'text.record'} /> */}
  </Text>
);
export const getAction = (props, item) => {
  switch (item.props.source) {
    case 'edit':
      return { gotoEditPage: item.props.gotoEditPage || props.gotoEditPage };
    case 'delete':
      return { deleteItem: item.props.deleteItem || props.deleteItem };
    case 'show':
      return { gotoShowPage: item.props.gotoShowPage || props.gotoShowPage };
    case 'group':
      return {
        gotoShowPage: props.gotoShowPage,
        deleteItem: props.deleteItem,
        gotoEditPage: props.gotoEditPage,
      };

    default:
      return {};
  }
};

// const getFilteredValue = (resourceFilter, source) => {
//   const sourceFilter = getRecordData(resourceFilter, source);
//   if (!sourceFilter) return [];
//   return sourceFilter.$in
//     ? [...sourceFilter.$in, { searchText: sourceFilter.$link }]
//     : [{ searchText: sourceFilter.$link }];
// };

RestTableLayout.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  // gotoEditPage: PropTypes.func,
  resourceData: PropTypes.array,
  resourceFilter: PropTypes.object,
  loading: PropTypes.bool,
  updateRecord: PropTypes.func,
  // onRow: PropTypes.func,
  customQuery: PropTypes.func,
  onEditHeaderSuccess: PropTypes.func,
};

RestTableLayout.defaultProps = {
  onEditHeaderSuccess: () => {},
};

export default RestTableLayout;
