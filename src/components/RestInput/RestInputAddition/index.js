import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Form, Input, Icon, Button, Collapse } from 'antd';
import { getRecordData } from '../../../utils/tools';
import { InputAdditionWrapper } from './InputAdditionWrapper';
import { RestInputContext } from '../RestInputContext';

const FormItem = Form.Item;
const { Panel } = Collapse;

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
      // eslint-disable-next-line
      data,
      formDatas: data || [{ vi: '', en: '' }],
    };
  }

  remove = index => {
    const { form, source } = this.props;
    const { formDatas } = this.state;
    // can use data-binding to get
    // We need at least one passenger
    if (formDatas.length === 1) {
      return;
    }
    const tempContents = [...formDatas];
    tempContents.splice(index, 1);
    this.setState({ formDatas: tempContents });
    // can use data-binding to set
    form.setFieldsValue({
      [source]: [...tempContents],
    });
  };

  add = () => {
    const { form, source } = this.props;
    const { formDatas } = this.state;
    // can use data-binding to get
    const tempContents = [...formDatas, {}];
    this.setState({ formDatas: tempContents });
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      [source]: tempContents,
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
    const { form, source, children, record, header } = this.props;
    const extraAction = index => <Icon onClick={e => this.remove(e, index)} type="delete" />;
    const formItems = formDatas ? (
      formDatas.map((k, index) => (
        <Panel
          forceRender
          header={`${I18n.t(header)} (${index + 1})`}
          key={String(index)}
          extra={formDatas.length === 1 ? null : extraAction(index)}
        >
          {React.Children.map(children, node =>
            React.cloneElement(node, {
              form,
              record,
              key: `${source}[${String(index)}].${node.props.source}`,
              source: `${source}[${index}].${node.props.source}`,
            }),
          )}
        </Panel>
      ))
    ) : (
      <span />
    );
    return (
      <InputAdditionWrapper>
        <Collapse
          expandIconPosition="right"
          defaultActiveKey={formDatas.map((data, index) => `${index}`)}
        >
          {formItems}
        </Collapse>
        <Button className="btnAdd" type="dashed" onClick={this.add}>
          <Icon type="plus" />
          {`${I18n.t('button.add')} `}
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
  header: PropTypes.any,
};

InputAddition.defaultProps = {};

const RestInputAddition = props => (
  <RestInputContext.Consumer>
    {({ record, form, handleSubmit }) => (
      <InputAddition {...props} {...{ record, form, handleSubmit }} />
    )}
  </RestInputContext.Consumer>
);

export default RestInputAddition;
