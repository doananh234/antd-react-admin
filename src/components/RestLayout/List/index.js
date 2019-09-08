import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';
import I18n from 'i18next';
import CustomBreadcrumb from '../../common/Breadcrumb';
import CreateButton from '../../RestActions/CreateButton';
import ExportExcelButton from '../../RestActions/ExportExcelButton';
import RestTableLayout, { getAction, showTotal } from '../TableLayout';
import Box from '../../common/Box';
import RestFilterForm from '../FilterLayout';
import RestListLayout from '../ListLayout';
import { ListWrapper } from './styles';
import SearchInput from '../../RestActions/SearchInput';
import PageTitle from '../../common/PageTitle';

class RestListComponent extends Component {
  state = {};

  onTextSearch = text => {
    const { retrieveList } = this.props;
    retrieveList({
      q: text,
    });
  };

  onChangePagination = (page, pageSize) => {
    const { resourceFilter, retrieveList } = this.props;
    retrieveList({
      ...resourceFilter,
      orderBy: resourceFilter.orderBy,
      page,
      limit: pageSize,
      filter: resourceFilter.filter,
    });
  };

  renderListItem = record => {
    const { children } = this.props;
    return React.Children.map(children, item =>
      React.cloneElement(item, {
        key: item.source,
        record,
        onChange: () => this.onChangeRecord(record, item),
        ...getAction(this.props, item),
      })
    );
  };

  render() {
    const {
      retrieveList,
      noCardWrapper,
      resourceData,
      resource,
      hasCreate,
      layoutButtonCreate,
      gotoCreatePage,
      filter,
      header,
      isList,
      location,
      hasSearch,
      hasExport,
      createHeader,
      resourceFilter,
      customActions,
      customLayout,
    } = this.props;
    const BREADCRUMB_LIST = [];
    location &&
      location.pathname.split('/').forEach((data, index) => {
        if (data === '') return;
        BREADCRUMB_LIST.push({
          key: data,
          title: data,
          path: `${BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''}/${data}`,
        });
      });
    if (BREADCRUMB_LIST.length > 0) {
      BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title =
        typeof header === 'string'
          ? I18n.t(header)
          : header || BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title;
    }
    const actions = (
      <div className="vActions">
        {hasSearch && (
          <SearchInput
            defaultValue={resourceFilter && resourceFilter.q}
            onTextSearch={this.onTextSearch}
          />
        )}
        {customActions}
        {hasCreate && layoutButtonCreate !== 'inline' && (
          <CreateButton header={createHeader} resource={resource} gotoCreatePage={gotoCreatePage} />
        )}
        {hasExport && <ExportExcelButton resource={resource} resourceFilter={resourceFilter} />}
      </div>
    );

    if (!resourceData) return null;
    const filterForm = filter ? (
      <RestFilterForm
        format={filter.props.format}
        resourceFilter={resourceFilter}
        retrieveList={retrieveList}
      >
        {filter}
      </RestFilterForm>
    ) : null;
    const pagimationView = (
      <Pagination
        showSizeChanger
        // showQuickJumper
        total={resourceFilter.count}
        defaultCurrent={resourceFilter.page || 1}
        current={resourceFilter.page || 1}
        showTotal={showTotal}
        pageSize={resourceFilter.limit || 20}
        onChange={this.onChangePagination}
        onShowSizeChange={this.onChangePagination}
      />
    );
    // const paginationTopView = (
    //   <Row
    //     className="paginationRow"
    //     justify="center"
    //     align="middle"
    //     type="flex"
    //     style={{ marginBottom: 20 }}
    //   >
    //     <Col md={actions ? 16 : 24} xs={24}>
    //       {pagimationView}
    //     </Col>
    //     {actions && (
    //       <Col md={8} xs={24}>
    //         <ActionView>{actions}</ActionView>
    //       </Col>
    //     )}
    //   </Row>
    // );

    const paginationBottomView = (
      <Row
        key="paginationBottom"
        className="paginationRow"
        justify="center"
        align="middle"
        type="flex"
      >
        <Col xs={24}>{pagimationView}</Col>
      </Row>
    );

    const tableContent = [
      <Box key="table" className="box">
        <RestTableLayout {...this.props} />
      </Box>,
      paginationBottomView,
    ];
    const listCotent = customLayout ? (
      React.cloneElement(customLayout, {
        retrieveList,
        resource,
        resourceData,
        resourceFilter,
      })
    ) : (
      <RestListLayout {...this.props} />
    );
    const content =
      isList || customLayout ? (
        listCotent
      ) : (
        <Row className="viewContent">
          <Col md={0} xs={24}>
            {listCotent}
          </Col>
          <Col md={24} xs={0}>
            {tableContent}
          </Col>
        </Row>
      );

    return (
      <ListWrapper>
        <div className="viewContent">
          {!noCardWrapper && (
            <PageTitle
              extraAction={
                hasCreate &&
                layoutButtonCreate === 'inline' && (
                  <CreateButton
                    header={createHeader}
                    resource={resource}
                    gotoCreatePage={gotoCreatePage}
                  />
                )
              }
            >
              <CustomBreadcrumb data={BREADCRUMB_LIST} />
            </PageTitle>
          )}
          {filterForm}
          {actions}
          {content}
        </div>
      </ListWrapper>
    );
  }
}

RestListComponent.propTypes = {
  resource: PropTypes.string,
  noCardWrapper: PropTypes.bool,
  retrieveList: PropTypes.func,
  resourceData: PropTypes.array,
  hasCreate: PropTypes.bool,
  gotoCreatePage: PropTypes.func,
  filter: PropTypes.object,
  header: PropTypes.any,
  children: PropTypes.any,
  isList: PropTypes.bool,
  hasSearch: PropTypes.bool,
  hasExport: PropTypes.bool,
  location: PropTypes.object,
  createHeader: PropTypes.string,
  resourceFilter: PropTypes.object,
  layoutButtonCreate: PropTypes.string,
  exportExcel: PropTypes.func,
  customActions: PropTypes.any,
  customLayout: PropTypes.any,
};

RestListComponent.defaultProps = {
  noCardWrapper: false,
  isList: false,
  hasExport: true,
  hasSearch: true,
  hasCreate: true,
  layoutButtonCreate: 'non-inline',
};
export default RestListComponent;
