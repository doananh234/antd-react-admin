import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { List, Col, Row, Card } from 'antd';
import { getAction } from '../TableLayout';

class RestListLayout extends Component {
  onChangePagination = ({ current, pageSize }) => {
    const { resourceFilter } = this.props;
    this.props.retrieveList({
      page: current,
      limit: pageSize,
      filter: resourceFilter.filter,
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

  onChangePage = page => {
    const { resourceFilter } = this.props;
    this.props.retrieveList({
      page,
      limit: resourceFilter.limit || 10,
      filter: resourceFilter.filter,
    });
  };

  renderListItem = record => {
    const { children } = this.props;
    const actions = React.Children.map(
      children.find(element => element.props.source === 'actionGroup').props.children,
      item =>
        React.cloneElement(item, {
          record,
          table: true,
          list: true,
          onChange: () => this.onChangeRecord(record, item),
          ...getAction(this.props, item),
        })
    );
    return (
      <Card className="item" actions={actions}>
        <Row>
          {React.Children.map(children, item => {
            if (item.props.source === 'actionGroup') return null;
            return (
              <Col span={24} key={item.props.header}>
                <div className="title">{I18n.t(item.props.header)}</div>
                {React.cloneElement(item, {
                  record,
                  table: true,
                  list: true,
                  onChange: () => this.onChangeRecord(record, item),
                  ...getAction(this.props, item),
                })}
              </Col>
            );
          })}
        </Row>
      </Card>
    );
  };

  render() {
    const {
      resourceData,
      gotoEditPage,
      deleteItem,
      gotoShowPage,
      responseRender,
      isList,
      resourceFilter,
    } = this.props;
    return (
      <List
        grid={{ gutter: 16 }}
        pagination={{
          position: 'none',
          onChange: this.onChangePage,
          pageSize: resourceFilter.limit || 10,
        }}
        style={{ marginTop: 20 }}
        dataSource={resourceData || []}
        renderItem={record => (
          <List.Item key={record.id}>
            {responseRender && !isList
              ? responseRender(record, {
                  gotoShowPage,
                  deleteItem,
                  gotoEditPage,
                })
              : this.renderListItem(record)}
          </List.Item>
        )}
      />
    );
  }
}

RestListLayout.propTypes = {
  retrieveList: PropTypes.func,
  resourceData: PropTypes.array,
  resourceFilter: PropTypes.object,
  updateRecord: PropTypes.func,
  responseRender: PropTypes.func,
  gotoEditPage: PropTypes.func,
  gotoShowPage: PropTypes.func,
  deleteItem: PropTypes.func,
  children: PropTypes.any,
  isList: PropTypes.bool,
};

export default RestListLayout;
