import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';
import I18n from 'i18next';
import ExportExcelButton from 'components/RestActions/ExportExcelButton';
import { makeBreadCrumbFromPath } from 'utils/tools';
import { useLocation } from 'react-router';
import CustomBreadcrumb from '../../common/Breadcrumb';
import CreateButton from '../../RestActions/CreateButton';
import RestTableLayout, { showTotal } from '../TableLayout';
import Box from '../../common/Box';
import RestFilterForm from '../FilterLayout';
import RestListLayout from '../ListLayout';
import { ListWrapper } from './styles';
import SearchInput from '../../RestActions/SearchInput';
import PageTitle from '../../common/PageTitle';

const RestListComponent = (props) => {
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
    hasSearch,
    hasExport,
    createHeader,
    resourceFilter,
    customActions,
    placeholderSearch,
    customLayout,
    summaryRow,
    noSummaries,
    isShowPagination,
  } = props;
  const location = useLocation();
  const onTextSearch = (text) => {
    retrieveList({
      q: text,
    });
  };

  const onChangePagination = (page, pageSize) => {
    retrieveList({
      ...resourceFilter,
      orderBy: resourceFilter.orderBy,
      offset: (page - 1) * pageSize,
      limit: pageSize,
      filter: resourceFilter.filter,
    });
  };

  let BREADCRUMB_LIST = location ? makeBreadCrumbFromPath(location) : [];
  if (BREADCRUMB_LIST.length > 0) {
    BREADCRUMB_LIST = BREADCRUMB_LIST.slice(-1);
    BREADCRUMB_LIST[0].title =
      typeof header === 'string'
        ? I18n.t(header)
        : header || BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title;
  }
  const actions = (
    <div className="vActions">
      {hasSearch && (
        <SearchInput
          defaultValue={resourceFilter && resourceFilter.q}
          onTextSearch={onTextSearch}
          placeholder={placeholderSearch}
        />
      )}
      <div style={{ flex: 1 }} />
      {customActions}
      {hasExport && (
        <div className="mx-12">
          <ExportExcelButton
            resource={resource}
            resourceFilter={resourceFilter}
          />
        </div>
      )}
      {hasCreate && layoutButtonCreate !== 'inline' && (
        <CreateButton
          header={createHeader}
          resource={resource}
          gotoCreatePage={gotoCreatePage}
        />
      )}
    </div>
  );

  if (!resourceData) return null;
  const filterForm = filter ? (
    <RestFilterForm
      format={filter.props.format}
      resourceFilter={resourceFilter}
      retrieveList={retrieveList}
      {...props}
    >
      {filter}
    </RestFilterForm>
  ) : null;
  const paginationView = (
    <Pagination
      showSizeChanger
      showQuickJumper
      total={resourceFilter.count}
      defaultCurrent={resourceFilter.offset / resourceFilter.limit + 1 || 1}
      current={resourceFilter.offset / resourceFilter.limit + 1 || 1}
      showTotal={showTotal}
      pageSize={resourceFilter.limit || 10}
      onChange={onChangePagination}
      onShowSizeChange={onChangePagination}
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
  //       {paginationView}
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
      justify="end"
      align="middle"
      type="flex"
    >
      {isShowPagination && <Col>{paginationView}</Col>}
    </Row>
  );

  const tableContent = [
    <Box key="table" className="box">
      <RestTableLayout {...props} />
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
    <RestListLayout {...props} />
  );
  const content =
    isList || customLayout ? (
      <>
        {listCotent}
        {paginationBottomView}
      </>
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
          <PageTitle>
            <CustomBreadcrumb data={BREADCRUMB_LIST} />
          </PageTitle>
        )}
        {!noCardWrapper && !noSummaries && <div>{summaryRow}</div>}
        {filterForm}
        {actions}
        {content}
      </div>
    </ListWrapper>
  );
};

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
  placeholderSearch: PropTypes.string,
  exportExcel: PropTypes.func,
  customActions: PropTypes.any,
  customLayout: PropTypes.any,
  summaryRow: PropTypes.node,
  noSummaries: PropTypes.bool,
  isShowPagination: PropTypes.bool,
};

RestListComponent.defaultProps = {
  noCardWrapper: false,
  isList: false,
  hasExport: true,
  hasSearch: true,
  hasCreate: true,
  layoutButtonCreate: 'non-inline',
  isShowPagination: true,
};
export default RestListComponent;
