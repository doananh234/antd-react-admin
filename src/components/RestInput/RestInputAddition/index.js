import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Form, Input, Icon, Button, Row, Col } from 'antd';
import { getRecordData } from '../../../utils/tools';
import { InputAdditionWrapper } from './InputAdditionWrapper';

const FormItem = Form.Item;

class InputAddition extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    const data = getRecordData(nextProps.record, nextProps.source);
    if (data !== prevState.data) {
      return { data, formDatas: data };
    }
    return {};
  };

  constructor(props) {
    super(props);
    const { record, source } = props;
    const data = getRecordData(record, source);
    this.state = {
      data,
      formDatas: data || [{ vi: '', en: '' }],
    };
  }

  remove = k => {
    const { form, source } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(source);
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }
    const formDatas = keys.filter((key, index) => index !== k);
    this.setState({ formDatas });
    // can use data-binding to set
    form.setFieldsValue({
      [source]: [...formDatas],
    });
  };

  add = () => {
    const { form, source } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(source);
    const formDatas = [...keys, { vi: '', en: '' }];
    this.setState({ formDatas });
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      [source]: formDatas,
    });
  };

  renderInput = (key, data, index, isTitle) => placeholder => {
    const { form, source } = this.props;
    const { getFieldDecorator } = form;
    const { formDatas } = this.state;
    const ComponentInput = isTitle ? Input : Input.TextArea;
    return (
      <div className="inputRow">
        <div>{key === 'vi' ? `${index}. ` : null}</div>
        <FormItem required={false} key={index} className="input">
          {getFieldDecorator(`${source}[${index}].${key}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                whitespace: true,
              },
            ],
            initialValue: getRecordData(data, key),
          })(<ComponentInput autosize={{ minRows: 2, maxRows: 3 }} placeholder={placeholder} />)}
        </FormItem>
        <div style={{ width: 20 }}>
          {formDatas.length > 1 && key === 'name.en' ? (
            <Icon
              type="minus-circle-o"
              disabled={formDatas.length === 1}
              onClick={() => this.remove(index)}
            />
          ) : null}
        </div>
      </div>
    );
  };

  render() {
    const { formDatas } = this.state;
    const { form, source, children, numberOfCols, record, header } = this.props;
    const formItems = formDatas ? (
      formDatas.map((k, index) => {
        const key = index;
        return (
          <Row gutter={16} key={key}>
            <Col xs={24}>
              <h3>
                {I18n.t(header)}
                {' '}
(
                {index + 1}
)
                <span style={{ width: 40, paddingLeft: 10 }}>
                  {formDatas.length > 1 ? (
                    <Icon
                      type="minus-circle-o"
                      disabled={formDatas.length === 1}
                      onClick={() => this.remove(index)}
                    />
                  ) : null}
                </span>
              </h3>
            </Col>
            {React.Children.map(children, (node, index2) => {
              const key2 = index2;
              return (
                <Col key={key2} sm={24 / numberOfCols} xs={24}>
                  {React.cloneElement(node, {
                    form,
                    record,
                    key: `${source}[${key}].${node.props.source}`,
                    source: `${source}[${index}].${node.props.source}`,
                  })}
                </Col>
              );
            })}
          </Row>
        );
      })
    ) : (
      <span />
    );
    return (
      <InputAdditionWrapper>
        {formItems}
        <Button type="dashed" onClick={this.add}>
          <Icon type="plus" />
          {I18n.t('button.add')} 
          {' '}
          {I18n.t(header)}
        </Button>
      </InputAdditionWrapper>
    );
  }
}
InputAddition.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string,
  children: PropTypes.any,
  numberOfCols: PropTypes.number,
  header: PropTypes.any,
};

InputAddition.defaultProps = {
  numberOfCols: 1,
};

export default InputAddition;
