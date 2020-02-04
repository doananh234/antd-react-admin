import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Form, Button, Row, Col } from 'antd';
import { FilterFormWrapper } from './styles';
import Box from '../../common/Box';

class FormComponent extends Component {
  onFilter = () => {
    const { form, format, retrieveList } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        retrieveList({ filter: format(values) });
      }
    });
  };

  onClear = () => {
    this.props.form.resetFields();
    this.props.retrieveList({ filter: {} });
  };

  render() {
    const { form, children, retrieveList, resourceFilter } = this.props;
    const components = React.Children.map(children, element =>
      React.cloneElement(element, {
        form,
        record: resourceFilter.filter || {},
        retrieveList,
        required: false,
      }),
    );
    return (
      <Box>
        <FilterFormWrapper>
          <div className="filterContainer">
            <div className="filterContent">{components}</div>
            <div className="filterActions">
              <Row gutter={10}>
                <Col span={12}>
                  <Button
                    type="primary"
                    onClick={this.onFilter}
                    className="filterButton"
                  >
                    {I18n.t('button.filter')}
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    onClick={this.onClear}
                    className="filterButton clearButton"
                  >
                    {I18n.t('button.clearFilter')}
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </FilterFormWrapper>
      </Box>
    );
  }
}

const FilterForm = Form.create()(FormComponent);
const RestFilterForm = props => <FilterForm {...props} />;

FormComponent.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  resourceFilter: PropTypes.any,
  form: PropTypes.object,
  format: PropTypes.func,
};

FormComponent.defaultProps = {
  format: values => values,
};

export default RestFilterForm;
