import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import _, { zipObjectDeep } from 'lodash';
import { Form, Button, Row, Col } from 'antd';
import { FilterFormWrapper } from './styles';
import { RestInputContext } from '../../RestInput/RestInputContext';

const FormComponent = ({ format, resourceFilter, children, retrieveList }) => {
  const [form] = Form.useForm();
  const onFilter = () => {
    form.validateFields().then((values) => {
      const parseToObj = zipObjectDeep(Object.keys(values), _.values(values));
      retrieveList({ filter: format(parseToObj) });
    });
  };
  const onClear = () => {
    retrieveList({ filter: {} });
    setTimeout(() => {
      form.resetFields();
    }, 0);
  };
  return (
    <FilterFormWrapper layout="vertical" form={form}>
      <div className="filterContainer">
        <div className="filterContent">
          <RestInputContext.Provider
            value={{
              form,
              record: resourceFilter.filter || {},
              handleSubmit: onFilter,
            }}
          >
            {children}
          </RestInputContext.Provider>
        </div>
        <div className="filterActions">
          <Row gutter={10}>
            <Col lg={12} md={24} sm={24} xs={24} className="col-filter">
              <Button
                type="primary"
                onClick={onFilter}
                className="filterButton"
              >
                {I18n.t('button.filter')}
              </Button>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24} className="col-clear">
              <Button onClick={onClear} className="filterButton clearButton">
                {I18n.t('button.clearFilter')}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </FilterFormWrapper>
  );
};

FormComponent.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  format: PropTypes.func,
  resourceFilter: PropTypes.object,
};

FormComponent.defaultProps = {
  format: (values) => values,
};

export default FormComponent;
