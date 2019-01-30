import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import I18n from 'i18next';
import Text from '../../common/Text';
import { getRecordData } from '../../../utils/tools';

class RestTableLayout extends Component {
  onChangePagination = (e, filters, sorter) => {
    const { resourceFilter, retrieveList } = this.props;
    const formatFilter = {};
    const formatSort =
      sorter && sorter.field ? `${sorter.order === 'descend' ? '-' : ''}${sorter.field}` : null;
    Object.keys(filters).forEach(filter => {
      formatFilter[filter] = { $in: filters[filter] };
    });
    retrieveList({
      skip: (e.current - 1) * e.pageSize,
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

  render() {
    const {
      resourceData,
      resourceFilter,
      children,
      gotoEditPage,
      loading,
      onRow,
      customQuery,
    } = this.props;
    const columns = children.map((item, index) => ({
      fixed: item.props.fixed,
      title: item.props.title ? I18n.t(item.props.title) : null,
      dataIndex: item.props.source,
      width: item.props.width,
      align: item.props.align,
      key: `${item.props.source}col${index}`,
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
    }));

    return (
      <Table
        onRow={record => ({
          onDoubleClick: () => {
            onRow ? onRow(record) : gotoEditPage(record.id);
          },
        })}
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

RestTableLayout.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  gotoEditPage: PropTypes.func,
  resourceData: PropTypes.array,
  resourceFilter: PropTypes.object,
  loading: PropTypes.bool,
  updateRecord: PropTypes.func,
  onRow: PropTypes.func,
  customQuery: PropTypes.func,
};

export default RestTableLayout;
